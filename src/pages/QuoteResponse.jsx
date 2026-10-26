import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CheckCircle2,
  XCircle,
  Loader2,
  AlertCircle,
  ThumbsDown,
  ArrowRight,
} from 'lucide-react'
import { respondToQuote } from '../lib/supabaseApi'
import FadeIn from '../components/FadeIn'

const mapStatus = {
  loading: { icon: Loader2, text: 'Processing your response…' },
  success: { icon: CheckCircle2, text: 'Thank you for confirming!' },
  rejected: { icon: XCircle, text: 'Thanks for letting us know.' },
  error: { icon: AlertCircle, text: 'We couldn’t process that.' },
}

export default function QuoteResponse() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const action = searchParams.get('action')
  const token = searchParams.get('token')

  const [status, setStatus] = useState('loading')
  const [message, setMessage] = useState('')
  const [showRejectReason, setShowRejectReason] = useState(false)
  const [rejectionReason, setRejectionReason] = useState('')
  const [busy, setBusy] = useState(false)

  const finalise = useCallback(
    async (finalAction, reason = null) => {
      setBusy(true)
      try {
        const result = await respondToQuote({ quote_id: id, token, action: finalAction, rejection_reason: reason })
        if (result?.ok) {
          setStatus(finalAction === 'reject' ? 'rejected' : 'success')
        } else {
          setStatus('error')
          setMessage(result?.error || 'This link is no longer valid.')
        }
      } catch (e) {
        setStatus('error')
        setMessage(e?.message || 'Something went wrong. Please try again.')
      } finally {
        setBusy(false)
      }
    },
    [id, token],
  )

  useEffect(() => {
    if (!id || !token || !action) {
      setStatus('error')
      setMessage('This confirmation link is incomplete or no longer valid.')
      return
    }
    if (action === 'reject') {
      setShowRejectReason(true)
      setStatus('loading')
    } else if (action === 'accept') {
      finalise('accept')
    } else {
      setStatus('error')
      setMessage('This confirmation link is no longer valid.')
    }
  }, [id, token, action, finalise])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-[#e63f8c]/20 to-[#ff8b3d]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-[#e63f8c]/20 to-[#ff8b3d]/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-2xl flex-col items-center justify-center px-6 py-20">
        <FadeIn>
          <div className="w-full overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-2xl shadow-orange-100/50">
            <div className="bg-gradient-to-r from-[#e63f8c] to-[#ff8b3d] px-8 py-10 text-center">
              <div className="text-3xl font-black tracking-wide text-white">WHIPPY BOIS</div>
              <div className="mt-1 text-sm text-white/80">Ice Cream Van Hire · Slough, UK</div>
            </div>

            <div className="p-8 sm:p-10">
              <AnimatePresence mode="wait">
                {status === 'loading' && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center py-10 text-center"
                  >
                    <Loader2 className="h-12 w-12 animate-spin text-[#e63f8c]" />
                    <p className="mt-4 text-lg font-semibold text-gray-800">
                      {showRejectReason ? 'Almost done — please confirm below' : 'Processing your response…'}
                    </p>
                  </motion.div>
                )}

                {(status === 'success' || status === 'rejected') && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center py-6 text-center"
                  >
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full ${
                        status === 'success' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-500'
                      }`}
                    >
                      {status === 'success' ? <CheckCircle2 className="h-10 w-10" /> : <XCircle className="h-10 w-10" />}
                    </div>
                    <h2 className="mt-5 text-2xl font-bold text-gray-900">
                      {status === 'success' ? 'Quote accepted' : 'Quote rejected'}
                    </h2>
                    <p className="mt-2 max-w-md text-gray-600">
                      {status === 'success'
                        ? 'Great choice! Whippy Bois will be in touch shortly to confirm the final details and arrange payment.'
                        : 'No problem — thanks for letting us know. We hope to serve you in the future.'}
                    </p>
                    <button
                      onClick={() => navigate('/contact')}
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e63f8c] to-[#ff8b3d] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:opacity-90"
                    >
                      Back to Whippy Bois <ArrowRight className="h-4 w-4" />
                    </button>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center py-6 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      <AlertCircle className="h-10 w-10" />
                    </div>
                    <h2 className="mt-5 text-2xl font-bold text-gray-900">Sorry, that link didn’t work</h2>
                    <p className="mt-2 max-w-md text-gray-600">{message}</p>
                    <button
                      onClick={() => navigate('/contact')}
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                    >
                      Contact us <ArrowRight className="h-4 w-4" />
                    </button>
                  </motion.div>
                )}

                {showRejectReason && status === 'loading' && (
                  <motion.div
                    key="reject"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center py-4 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                      <ThumbsDown className="h-9 w-9" />
                    </div>
                    <h2 className="mt-5 text-2xl font-bold text-gray-900">Decline this quote?</h2>
                    <p className="mt-2 max-w-md text-gray-600">
                      We’re sorry to see you go. Your response is optional — tell us why (if you’d like) and confirm.
                    </p>
                    <textarea
                      value={rejectionReason}
                      onChange={(e) => setRejectionReason(e.target.value)}
                      placeholder="Optional: tell us why you're declining…"
                      rows={3}
                      className="mt-5 w-full max-w-md rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 outline-none focus:border-[#e63f8c] focus:ring-2 focus:ring-[#e63f8c]/20"
                    />
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <button
                        onClick={() => setShowRejectReason(false)}
                        disabled={busy}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
                      >
                        Go back
                      </button>
                      <button
                        onClick={() => finalise('reject', rejectionReason)}
                        disabled={busy}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-700"
                      >
                        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <ThumbsDown className="h-4 w-4" />}
                        {busy ? 'Confirming…' : 'Confirm rejection'}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>

        <p className="mt-8 max-w-md text-center text-xs text-gray-400">
          This link is personal to your quote and shouldn’t be shared. If you have any questions, please{' '}
          <a href="/contact" className="font-semibold text-[#e63f8c] underline-offset-2 hover:underline">
            contact Whippy Bois
          </a>
          .
        </p>
      </div>
    </div>
  )
}

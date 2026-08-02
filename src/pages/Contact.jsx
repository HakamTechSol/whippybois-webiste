import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, X, Clock, Loader2, AlertCircle } from 'lucide-react'
import { contactInfo } from '../data/content'
import { submitQuoteRequest } from '../lib/supabaseApi'
import FadeIn from '../components/FadeIn'

const eventTypeOptions = ['Wedding', 'Corporate Event', 'Birthday', 'Charity Event', 'Other']

const budgetOptions = ['Under $1000', '$1000-$5000', '$5000-$10000', '$10000+']

const contactCards = [
  { icon: Mail, label: 'Email us', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Phone, label: 'Call us', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, '')}` },
  { icon: MapPin, label: 'Visit us', value: contactInfo.address },
]

const emptyForm = {
  full_name: '',
  email: '',
  phone: '',
  event_type: '',
  event_date: '',
  guest_count: '',
  location: '',
  budget_range: '',
  message: '',
}

// Earliest selectable date for the date picker (tomorrow — event must be in the future).
const minDate = (() => {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().split('T')[0]
})()

/**
 * Contact page — quote request form (left) + contact info & map placeholder (right).
 * Form is controlled with client-side validation; on submit it POSTs a public
 * write-only insert to Supabase (via plain fetch, no SDK) and shows a toast.
 */
export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState(null)
  const [loading, setLoading] = useState(false)

  // Auto-dismiss the toast after a few seconds.
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 6000)
    return () => clearTimeout(t)
  }, [toast])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // clear the field's error as the user types
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev))
  }

  const validate = () => {
    const next = {}
    if (!form.full_name.trim()) next.full_name = 'Please enter your name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      next.email = 'That email doesn’t look right.'
    }
    if (form.phone.trim() && !/^[+\d][\d\s\-()]{6,}$/.test(form.phone.trim())) {
      next.phone = 'Enter a valid phone number.'
    }
    if (!form.event_type) next.event_type = 'Pick an event type.'
    if (!form.event_date) {
      next.event_date = 'Please pick a date.'
    } else if (form.event_date < minDate) {
      next.event_date = 'Please pick a future date.'
    }
    if (form.guest_count && (Number(form.guest_count) < 1 || Number.isNaN(Number(form.guest_count)))) {
      next.guest_count = 'Enter a valid guest count.'
    }
    if (!form.location.trim()) next.location = 'Please enter a location.'
    if (!form.budget_range) next.budget_range = 'Pick a budget range.'
    return next
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setLoading(true)
    try {
      const payload = {
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        event_type: form.event_type,
        event_date: form.event_date,
        guest_count: form.guest_count ? Number(form.guest_count) : null,
        location: form.location.trim(),
        budget_range: form.budget_range,
        message: form.message.trim() || null,
      }
      await submitQuoteRequest(payload)
      setToast({
        type: 'success',
        title: 'Quote request sent!',
        body: 'We’ll be in touch within one business day.',
      })
      setForm(emptyForm)
    } catch (err) {
      // Keep the form data intact on failure so the user can retry.
      setToast({
        type: 'error',
        title: 'Something went wrong',
        body: err.message || 'Please try again in a moment.',
      })
    } finally {
      setLoading(false)
    }
  }

  const dismissToast = () => setToast(null)

  const inputClass = (hasError) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:ring-4 ${
      hasError
        ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
        : 'border-gray-200 focus:border-brand-400 focus:ring-brand-100'
    }`

  const FieldError = ({ msg }) =>
    msg ? <p className="mt-1.5 text-xs font-medium text-red-600">{msg}</p> : null

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-b from-lavender-100 via-cream-100 to-white pt-28 pb-10 sm:pt-36 sm:pb-14">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
              Contact us
            </span>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
              Request a free quote
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
              Tell us about your event and we’ll send a free, tailored quote within one business day —
              no obligation, just fresh scoops.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:gap-12 lg:px-8">
          {/* ===== Form ===== */}
          <FadeIn>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-gray-100 bg-white p-6 shadow-card sm:p-8"
            >
              <h2 className="text-xl font-bold text-gray-900">Event details</h2>
              <p className="mt-1 text-sm text-gray-500">
                Fields marked <span className="font-semibold text-brand-600">*</span> are required.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {/* Full name */}
                <div>
                  <label htmlFor="full_name" className="mb-1.5 block text-sm font-semibold text-gray-800">
                    Full name <span className="text-brand-600">*</span>
                  </label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    value={form.full_name}
                    onChange={handleChange}
                    placeholder="Jane Cooper"
                    className={inputClass(errors.full_name)}
                  />
                  <FieldError msg={errors.full_name} />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-gray-800">
                    Email <span className="text-brand-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className={inputClass(errors.email)}
                  />
                  <FieldError msg={errors.email} />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-gray-800">
                    Phone <span className="text-xs font-normal text-gray-400">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className={inputClass(errors.phone)}
                  />
                  <FieldError msg={errors.phone} />
                </div>

                {/* Event type */}
                <div>
                  <label htmlFor="event_type" className="mb-1.5 block text-sm font-semibold text-gray-800">
                    Event type <span className="text-brand-600">*</span>
                  </label>
                  <select
                    id="event_type"
                    name="event_type"
                    value={form.event_type}
                    onChange={handleChange}
                    className={`${inputClass(errors.event_type)} ${form.event_type ? '' : 'text-gray-400'}`}
                  >
                    <option value="" disabled>
                      Select an event type…
                    </option>
                    {eventTypeOptions.map((s) => (
                      <option key={s} value={s} className="text-gray-900">
                        {s}
                      </option>
                    ))}
                  </select>
                  <FieldError msg={errors.event_type} />
                </div>

                {/* Event date */}
                <div>
                  <label htmlFor="event_date" className="mb-1.5 block text-sm font-semibold text-gray-800">
                    Event date <span className="text-brand-600">*</span>
                  </label>
                  <input
                    id="event_date"
                    name="event_date"
                    type="date"
                    min={minDate}
                    value={form.event_date}
                    onChange={handleChange}
                    className={inputClass(errors.event_date)}
                  />
                  <FieldError msg={errors.event_date} />
                </div>

                {/* Guest count */}
                <div>
                  <label htmlFor="guest_count" className="mb-1.5 block text-sm font-semibold text-gray-800">
                    Guest count <span className="text-xs font-normal text-gray-400">(optional)</span>
                  </label>
                  <input
                    id="guest_count"
                    name="guest_count"
                    type="number"
                    min="1"
                    value={form.guest_count}
                    onChange={handleChange}
                    placeholder="e.g. 150"
                    className={inputClass(errors.guest_count)}
                  />
                  <FieldError msg={errors.guest_count} />
                </div>
              </div>

              {/* Location */}
              <div className="mt-5">
                <label htmlFor="location" className="mb-1.5 block text-sm font-semibold text-gray-800">
                  Location <span className="text-brand-600">*</span>
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="City, state / venue"
                  className={inputClass(errors.location)}
                />
                <FieldError msg={errors.location} />
              </div>

              {/* Budget range */}
              <div className="mt-5">
                <label htmlFor="budget_range" className="mb-1.5 block text-sm font-semibold text-gray-800">
                  Budget range <span className="text-brand-600">*</span>
                </label>
                <select
                  id="budget_range"
                  name="budget_range"
                  value={form.budget_range}
                  onChange={handleChange}
                  className={`${inputClass(errors.budget_range)} ${form.budget_range ? '' : 'text-gray-400'}`}
                >
                  <option value="" disabled>
                    Select a budget range…
                  </option>
                  {budgetOptions.map((b) => (
                    <option key={b} value={b} className="text-gray-900">
                      {b}
                    </option>
                  ))}
                </select>
                <FieldError msg={errors.budget_range} />
              </div>

              {/* Message */}
              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-gray-800">
                  Message <span className="text-xs font-normal text-gray-400">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Anything else we should know about your event?"
                  className={inputClass()}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-brand-gradient mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-8 py-4 text-sm font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                {loading ? 'Submitting…' : 'Submit quote request'}
              </button>
            </form>
          </FadeIn>

          {/* ===== Contact info + map ===== */}
          <div className="space-y-6">
            {contactCards.map((c, i) => (
              <FadeIn key={c.label} delay={i * 0.1}>
                <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <span className="bg-brand-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-card">
                    <c.icon size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="mt-0.5 block font-semibold text-gray-900 hover:text-brand-600">
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 font-semibold text-gray-900">{c.value}</p>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}

            {/* Map placeholder */}
            <FadeIn delay={0.3}>
              <div className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-card">
                <div className="bg-brand-gradient flex h-56 items-center justify-center">
                  {/* simple dotted "map" feel */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #fff 1px, transparent 1px), radial-gradient(circle at 70% 60%, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
                  <div className="relative flex flex-col items-center gap-2 text-white">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                      <MapPin size={26} />
                    </span>
                    <p className="px-6 text-center text-sm font-medium">
                      Interactive map coming soon.
                      <br />
                      <span className="text-white/80">{contactInfo.address}</span>
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Response-time note */}
            <FadeIn delay={0.4}>
              <div className="flex items-start gap-3 rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
                <Clock size={20} className="mt-0.5 shrink-0 text-brand-600" />
                <p className="text-sm leading-relaxed text-gray-700">
                  <span className="font-semibold text-gray-900">Average response time:</span> under 2
                  hours during business days. Prefer email? Reach us directly at{' '}
                  <a href={`mailto:${contactInfo.email}`} className="font-semibold text-brand-600 hover:underline">
                    {contactInfo.email}
                  </a>
                  .
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`fixed right-4 top-20 z-[60] flex w-[calc(100%-2rem)] max-w-sm items-start gap-3 rounded-2xl p-4 text-white shadow-soft sm:right-6 ${
              toast.type === 'error' ? 'bg-red-900' : 'bg-gray-900'
            }`}
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                toast.type === 'error' ? 'bg-red-500/25 text-red-300' : 'bg-green-500/20 text-green-400'
              }`}
            >
              {toast.type === 'error' ? <AlertCircle size={22} /> : <CheckCircle2 size={22} />}
            </span>
            <div className="flex-1">
              <p className="text-sm font-bold">{toast.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-gray-300">{toast.body}</p>
            </div>
            <button
              type="button"
              onClick={dismissToast}
              aria-label="Dismiss"
              className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

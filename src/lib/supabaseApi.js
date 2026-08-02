const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

/**
 * Submit a quote request to Supabase using the plain REST API (no SDK).
 * Public write-only insert into the `quote_requests` table.
 *
 * @param {object} payload - row matching the `quote_requests` columns
 *   (full_name, email, phone, event_type, event_date, guest_count,
 *    location, budget_range, message)
 * @returns {Promise<object[]>} the inserted row(s)
 */
export async function submitQuoteRequest(payload) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error(
      'Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.',
    )
  }

  const res = await fetch(`${SUPABASE_URL}/rest/v1/quote_requests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: 'return=representation',
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const errorData = await res.json().catch(() => null)
    throw new Error(errorData?.message || 'Failed to submit request')
  }

  return res.json()
}

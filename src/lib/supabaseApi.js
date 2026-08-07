const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

/**
 * Submit a quote request to Supabase using the plain REST API (no SDK).
 * Public write-only insert into the `quote_requests` table.
 *
 * @param {object} payload - row matching the `quote_requests` columns
 *   (customer_name, email, phone, event_type, event_date, event_time,
 *    duration_minutes, guest_count, location, budget_min, budget_max,
 *    currency, message)
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
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const errorData = await res.json().catch(() => null)
    throw new Error(errorData?.message || 'Failed to submit request')
  }

  // Anon insert returns 201 with no body (anon has no SELECT privilege).
  return true
}

/**
 * Check whether an account already exists for the given email.
 * Calls the public.email_exists SECURITY DEFINER function (anon-safe).
 *
 * @param {string} email
 * @returns {Promise<boolean>}
 */
export async function checkEmailExists(email) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error('Supabase is not configured.')
  }

  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/email_exists`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({ p_email: email }),
  })

  if (!res.ok) {
    throw new Error('We couldn’t check whether this email has an account.')
  }

  return res.json()
}

/**
 * Create a customer account via GoTrue signup (anon key).
 * If email confirmation is enabled in Supabase, the user must confirm
 * their email before signing in.
 *
 * @param {object} params { email, password, full_name }
 * @returns {Promise<object>} the created user / session payload
 */
export async function createCustomerAccount({ email, password, full_name }) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error('Supabase is not configured.')
  }

  const res = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({ email, password, data: { full_name } }),
  })

  if (!res.ok) {
    const errorData = await res.json().catch(() => null)
    throw new Error(
      errorData?.msg || errorData?.error_description || errorData?.message || 'Could not create an account',
    )
  }

  return res.json()
}

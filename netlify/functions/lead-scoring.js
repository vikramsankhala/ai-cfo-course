/**
 * Lead scoring function for Netlify Form submission webhook
 * Configure in Netlify: Site settings → Forms → Form notifications → Add notification
 * URL: https://yoursite.netlify.app/.netlify/functions/lead-scoring
 *
 * Can be extended to push to Google Sheets / Airtable / CRM via API
 */
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  let payload
  try {
    payload = JSON.parse(event.body)
  } catch (e) {
    return { statusCode: 400, body: 'Invalid JSON' }
  }

  const data = payload.data || payload.payload?.data || {}
  const programme = data.programme || data.Programme || ''

  let score = 0

  if (programme === 'AI for CFOs' || programme === 'CFO AI Lab') {
    const role = data.role || data.Role || ''
    if (['CFO', 'Head of Finance / VP Finance'].includes(role)) score += 30
    else if (['Controller / Finance Manager'].includes(role)) score += 20
    else if (role) score += 10

    const companySize = data.company_size || data.Company_Size || ''
    if (companySize === '200+') score += 20
    else if (companySize === '51-200') score += 10

    const goal = data.goal || data.Goal || ''
    if (['Better forecasting', 'Board-level insights'].includes(goal)) score += 20
    else if (goal === 'Reduce manual work') score += 10
  }

  if (programme === 'Dashboard Masters') {
    const tools = (data.current_tools || data.Current_Tools || '').toLowerCase()
    if (tools.includes('power bi')) score += 25
    if (tools.includes('tableau')) score += 25
    const objective = data.objective || data.Objective || ''
    if (['Job switch', 'Promotion'].includes(objective)) score += 20
  }

  const priority = score >= 60 ? 'High' : 'Normal'

  // TODO: Push to Google Sheets / Airtable / CRM via API with all fields + score + priority

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ success: true, score, priority }),
  }
}

export async function GET(req) {
  // In production, verify JWT or session token
  const authHeader = req.headers.get("cookie")
  const authenticated = !!authHeader

  return Response.json({ authenticated })
}

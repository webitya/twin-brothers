export async function POST(req) {
  const { username, password } = await req.json()

  // Simple hardcoded authentication - in production use proper auth
  if (username === "admin" && password === "admin123") {
    return Response.json({ message: "Login successful", authenticated: true }, { status: 200 })
  }

  return Response.json({ message: "Invalid credentials" }, { status: 401 })
}

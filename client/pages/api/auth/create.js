import { serialize } from "cookie"

export default async function handler(req, res) {
  const newToken = "TEST"

  if (!req.body.email) {
    return res.status(400).send({
      success: false,
      reason: "Missing email!",
    })
  }

  if (!req.body.password) {
    return res.status(400).send({
      success: false,
      reason: "Missing password!",
    })
  }

  const { email, password } = req.body

  res.setHeader(
    "Set-Cookie",
    serialize("spanish_website_cookie", newToken, { maxAge: 900000, httpOnly: true, SameSite: "lax" })
  )

  res.status(200).json({
    success: true,
    redirect: "/",
    email,
  })
}

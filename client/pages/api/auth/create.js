import { serialize } from "cookie"
import { createAccount, authenticate } from "../../../backend/util/account"

import middle from "../../../middleware/middle"
async function handler(req, res) {
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

  try {
  } catch (e) {
    if (e.code) return res.status(e.code).json({ e })
    console.error(e)
    return res.status(500).json({ message: "Internal server error" })
  }

  const user = await createAccount({ email, password })

  const { token } = await authenticate({ email, password })

  res.setHeader(
    "Set-Cookie",
    serialize("spanish_website_cookie", token, { maxAge: 900000, httpOnly: true, SameSite: "lax" })
  )

  res.status(200).json({
    success: true,
    redirect: req.headers.Referrer || "/",
    email,
  })
}

export default middle(handler)

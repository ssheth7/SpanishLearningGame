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

  try {
    const { token } = await authenticate({ email, password })

    if (!token)
      return res.status(401).send({
        success: false,
        reason: "Invalid credentials!",
      })

    res.setHeader(
      "Set-Cookie",
      serialize("spanish_website_cookie", token, { path: "/", maxAge: 900000, httpOnly: true, SameSite: "Strict" })
    )

    return res.status(200).json({
      success: true,
      redirect: req?.query?.redirect || req.headers.Referrer || "/",
      email,
    })
  } catch (e) {
    if (e.code) {
      return res.status(e.code).json({ success: false, ...e, reason: e.message })
    }
    console.error(e)
    return res.status(500).json({
      success: false,
      reason: "Internal server error",
    })
  }
}

export default middle(handler)

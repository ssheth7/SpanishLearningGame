import AuthLayout from "../../components/layout/AuthLayout"
import TextBox from "../../components/auth/TextBox"
import { useEffect, useState } from "react"
import styles from "./auth.module.css"

import { submitSignup } from "../../utils/query/authQuery"
export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [queryError, setQueryError] = useState("")

  const [loading, setLoading] = useState(false)

  const isEmailValid = () => !!email?.includes("@")

  const isPasswordValid = () => !!password && password.length > 0

  const isDisabled = (_) => !isEmailValid() || !isPasswordValid() || loading

  const submit = async () => {
    if (isDisabled()) return
    setLoading(true)

    try {
      const resp = await submitSignup({ email, password })
      if (resp.success) {
        if (resp.redirect) {
          window.location.href = resp.redirect
        }
      }
    } catch (e) {
      if (e.message) setQueryError(e.message)
      else if (e.reason) setQueryError(e.reason)
      else if (e.status) setQueryError("Error code " + e.status)
      console.error(e)
    }

    setLoading(false)
  }

  return (
    <AuthLayout activeTab="signup">
      <h2>🤝 &nbsp; Nice to meet you!</h2>
      <div className={styles.formContainer}>
        {queryError ? <small>{queryError}</small> : null}
        <TextBox name="email" placeholder="Email" value={email} setValue={setEmail} />
        <TextBox name="password" type="password" placeholder="Password" value={password} setValue={setPassword} />
        <button onClick={submit} className={styles.submit} disabled={isDisabled()}>
          Log in
        </button>
      </div>
    </AuthLayout>
  )
}

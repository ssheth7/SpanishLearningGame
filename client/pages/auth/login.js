import AuthLayout from "../../components/layout/AuthLayout"
import TextBox from "../../components/auth/TextBox"
import { useEffect, useState } from "react"
import styles from "./auth.module.css"

import { submitSignup } from "../../utils/query/authQuery"
export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [loading, setLoading] = useState(false)

  const isEmailValid = () => !!email?.includes("@")

  const isPasswordValid = () => !!password?.length > 4

  const isDisabled = (_) => !isEmailValid() || !isPasswordValid() || loading

  const submit = async () => {
    if (isDisabled) return
    setLoading(true)

    try {
        const resp = await submitSignup({ email, password })
        console.log(resp)
        if(resp.success) {
            console.log("OK")
        } else {
            console.log("Fail")
        }

    }catch(e) {
        console.error(e)
    }

    setLoading(false)
  }

  return (
    <AuthLayout activeTab="login">
      <h2>👋🏻 &nbsp; Welcome back!</h2>
      <div className={styles.formContainer}>
        <TextBox name="email" placeholder="Email" value={email} setValue={setEmail} />
        <TextBox name="password" type="password" placeholder="Password" value={password} setValue={setPassword} />
        <button onClick={submit} className={styles.submit} disabled={isDisabled()}>
          Log in
        </button>
      </div>
    </AuthLayout>
  )
}

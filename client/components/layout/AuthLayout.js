import styles from "./AuthLayout.module.css"
import Link from "next/link"

const tabs = {
  login: {
    to: "/auth/login",
    label: "Log in",
  },
  signup: {
    to: "/auth/signup",
    label: "Create account",
  },
}

export default function AuthLayout({ children, activeTab = "login" }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.centerComponent}>
          <div className={styles.tabBar}>
            {Object.keys(tabs).map((tab) => (
              <Link key={tab} href={tabs[tab].to} passHref>
                <a className={`${styles.tab} ${tab === activeTab ? styles.active : ""}`}>{tabs[tab].label}</a>
              </Link>
            ))}
          </div>
          <div className={styles.centerInner}>{children}</div>
        </div>
      </div>
    </>
  )
}

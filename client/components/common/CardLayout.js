import styles from "./CardLayout.module.css"

export default function CardLayout({ children }) {
  return (
    <>
      <div className={styles.cardContainer}>{children}</div>
    </>
  )
}

import styles from "./Jumbotron.module.css"

export default function Jumbotron({ children }) {
  return (
    <>
      <div className={styles.jumbotron}>{children}</div>
    </>
  )
}

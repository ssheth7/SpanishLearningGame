import styles from "./ActiveStep.module.css"

export default function ActiveStep({ step }) {
  return (
    <div className={styles.activeStep}>
      <h1> TODO ActiveStep </h1>
      <table>
        <thead>
          <tr>
            <th>English</th>
          </tr>
          <tr>
            <th>Spanish</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{step?.english}</td>
            <td>{step?.spanish}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

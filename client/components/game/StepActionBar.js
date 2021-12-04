import styles from "./StepActionBar.module.css"

export default function StepActionBar({ module, stepIndex }) {
  return (
    <div className={styles.stepActionBar}>
      <pre>
        Step {stepIndex + 1} / {module.steps.length}
      </pre>
    </div>
  )
}

import styles from "./StepActionBar.module.css"

function SteppedBar({ numer = 0, denom = 1 }) {
  return (
    <span className={styles.steppedBar}>
      {Array(numer)
        .fill(0)
        .map((_, i) => (
          <div key={i} className={styles.steppedActive} />
        ))}
      {Array(denom - numer)
        .fill(0)
        .map((_, i) => (
          <div key={`none` + i} className={styles.steppedInactive} />
        ))}
    </span>
  )
}

export default function StepActionBar({ module, stepIndex }) {
  return (
    <span className={styles.flex}>
      <span>{module.title} </span>
      <span className={styles.stepActionBar}>
        <SteppedBar numer={stepIndex + 1} denom={module.steps.length} />
      </span>
    </span>
  )
}

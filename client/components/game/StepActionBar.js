import styles from "./StepActionBar.module.css"

import Link from "next/link"

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

export default function StepActionBar({ module, stepIndex, nextPage = "#", previousPage = "#" }) {
  return (
    <>
      <div>
        <strong>{module.title}</strong>
      </div>
      <br />

      <span className={styles.flex}>
        <Link href={nextPage}>
          <a>&larr; Back</a>
        </Link>
        <span className={styles.stepActionBar}>
          <SteppedBar numer={stepIndex + 1} denom={module.steps.length} />
        </span>
        <Link href={nextPage}>
          <a>Next &rarr;</a>
        </Link>
      </span>
    </>
  )
}

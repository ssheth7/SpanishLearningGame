import styles from "./ActiveStep.module.css"

import { useEffect, useState } from "react"

export default function ActiveStep({ step, engSpan = true, actionBar = null }) {
  const [front, setFront] = useState(true)

  const _given = engSpan ? step.english : step.spanish
  const _answer = engSpan ? step.spanish : step.english

  return (
    <div className={styles.activeStep}>
      <div className={styles.stepContainer}>
        <div className={styles.center}>{actionBar}</div>
        <div className={`${styles.flashCard} ${front ? styles.flipped : ""}`} onClick={() => setFront(!front)}>
            <div className={styles.front}>{_given}</div>
            <div className={styles.back}>{_answer}</div>
        </div>
      </div>
    </div>
  )
}

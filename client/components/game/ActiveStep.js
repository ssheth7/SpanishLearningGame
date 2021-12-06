import styles from "./ActiveStep.module.css"

import RenderStepNoPhoto from "../module/RenderStepNoPhoto"
import RenderStepPhoto from "../module/RenderStepPhoto"
import { useEffect, useState } from "react"

export default function ActiveStep({ done = false, onCorrect = null, step, engSpan = true, actionBar = null }) {
  const [guess, setGuess] = useState("")

  const _given = engSpan ? step.english : step.spanish
  const _answer = engSpan ? step.spanish : step.english

  return (
    <div className={styles.activeStep}>
      <div className={styles.stepContainer}>
        <div className={styles.center}>{actionBar}</div>
        
      </div>
    </div>
  )
}

import styles from "./ActiveStep.module.css"

import RenderStepNoPhoto from "../module/RenderStepNoPhoto"
import RenderStepPhoto from "../module/RenderStepPhoto"
import { useEffect, useState } from "react"

export default function ActiveStep({ done = false, onCorrect = null, step, engSpan = true, actionBar = null }) {
  const [guess, setGuess] = useState("")

  const _given = engSpan ? step.english : step.spanish
  const _answer = engSpan ? step.spanish : step.english

  useEffect(() => setGuess(""), [step])
  useEffect(() => {
    if (!guess) return
    if (guess.toLowerCase() === _answer.toLowerCase()) {
      setGuess("")
      onCorrect()
    }
  }, [guess])

  const onEnter = () => {
    if (guess.toLowerCase() === _answer.toLowerCase()) {
      setGuess("")
      onCorrect()
    } else {
      setGuess("")
      onIncorrect()
    }
  }

  return (
    <div className={styles.activeStep}>
      <div className={styles.stepContainer}>
        <div className={styles.center}>{actionBar}</div>
        {done ? (
          <span>Correct!</span>
        ) : (
          <>
            {step?.photo ? (
              <RenderStepPhoto guess={guess} setGuess={setGuess} onEnter={onEnter} engSpan={engSpan} step={step} />
            ) : (
              <RenderStepNoPhoto guess={guess} setGuess={setGuess} onEnter={onEnter} engSpan={engSpan} step={step} />
            )}
          </>
        )}
      </div>
    </div>
  )
}

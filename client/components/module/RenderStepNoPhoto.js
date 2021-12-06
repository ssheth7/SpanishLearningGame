import styles from "./RenderStep.module.css"

export default function RenderStepNoPhoto({ step, guess, setGuess, engSpan }) {
  const _given = engSpan ? step.english : step.spanish
  const _answer = engSpan ? step.spanish : step.english

  return (
    <>
      <span>
        Translate "{_given}" to {engSpan ? "Spanish" : "English"}
      </span>
      <br />
      <input onChange={(e) => setGuess(e.target.value)} value={guess} />
    </>
  )
}

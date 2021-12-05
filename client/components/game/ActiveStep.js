import styles from "./ActiveStep.module.css"

import RenderStepNoPhoto from "../module/RenderStepNoPhoto"
import RenderStepPhoto from "../module/RenderStepPhoto"

export default function ActiveStep({ step, actionBar = null }) {
  return (
    <div className={styles.activeStep}>
      <div className={styles.stepContainer}>
        <div className={styles.center}>{actionBar}</div>
        {step?.photo ? <RenderStepPhoto step={step} /> : <RenderStepNoPhoto step={step} />}

        <code>
          <pre>{JSON.stringify(step, null, 2)}</pre>
        </code>
      </div>
    </div>
  )
}

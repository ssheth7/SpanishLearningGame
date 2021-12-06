import { useEffect, useState } from "react"
import AppLayout from "../../../../components/layout/AppLayout"

import { getModule } from "../../../../utils/query/material"

import AppContainer from "../../../../components/common/AppContainer"

function SurveyQuestion({ questionIndex, question, answer, setQuestionCorrect }) {
  const [value, setValue] = useState("")

  useEffect(() => {
    if (!value || !answer) return
    setQuestionCorrect(questionIndex, value.toLowerCase() === answer.toLowerCase())
  }, [value])

  return (
    <>
      <tr>
        <td>{question}</td>
        <td>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
        </td>
      </tr>
    </>
  )
}

export default function ModuleSurvey({ module }) {
  const [questionsCorrect, setQuestionsCorrect] = useState({})

  const setQuestionCorrect = (questionIndex, correct) => {
    setQuestionsCorrect({ ...questionsCorrect, [questionIndex]: correct })
  }

  const getPercentageCorrect = () => {
    return (
      (Object.keys(questionsCorrect).filter((correct) => !!questionsCorrect[correct]).length / module.steps.length) *
      100
    )
  }

  return (
    <AppLayout activePage="/modules">
      <AppContainer>
        <h1>Module Quiz</h1>

        <p>Name the Spanish word for each of the following English words:</p>

        <table>
          {module?.steps?.map((step, stepIndex) => (
            <SurveyQuestion
              key={stepIndex}
              questionIndex={stepIndex}
              question={step.english}
              answer={step.spanish}
              setQuestionCorrect={setQuestionCorrect}
            />
          ))}
        </table>

        <button>Submit</button>

        <code> {getPercentageCorrect()}% correct</code>
      </AppContainer>
    </AppLayout>
  )
}

export async function getStaticPaths() {
  // TODO fix fallbacks to be properly optimized
  return { paths: [], fallback: true }
}

export const getStaticProps = async ({ params }) => {
  // TODO error handling
  const { level, module } = await getModule({ levelID: params.level, moduleID: params.module })

  if (!level || !module) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      level,
      module,
    },
  }
}

import { useEffect, useState } from "react"
import AppLayout from "../../../../components/layout/AppLayout"

import { getModule } from "../../../../utils/query/material"

import AppContainer from "../../../../components/common/AppContainer"

import { useAuth } from "../../../../utils/hooks/auth"

function SurveyQuestion({ questionIndex, question, answer, setQuestionCorrect }) {
  const { user, loading } = useAuth()
  useEffect(() => {
    if (!loading && !user) {
      window.location.href = "/auth/login?redirect=" + encodeURIComponent(window.location.pathname)
    }
  }, [user, loading])

  const [value, setValue] = useState("")

  useEffect(() => {
    if (!value || !answer) return
    setQuestionCorrect(questionIndex, value.toLowerCase() === answer.toLowerCase())
  }, [value])

  // TODO format table
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

  const submitSurvey = async () => {
    const correct = getPercentageCorrect()

    const url = `/api/quiz/submit`

    console.log({ module })

    const module_id = module?.id

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        module_id: module_id,
        grade: correct,
      }),
    })

    console.log({ response })

    if (response.ok) {
      console.log("success")
    } else {
      console.log("fail")
    }

    // TODO handle response
  }

  const onClickSubmit = async () => {
    console.log("Submit button clicked")
    await submitSurvey()
  }

  const setQuestionCorrect = (questionIndex, correct) => {
    setQuestionsCorrect({ ...questionsCorrect, [questionIndex]: correct })
  }

  const getPercentageCorrect = () => {
    return (
      (Object.keys(questionsCorrect).filter((correct) => !!questionsCorrect[correct]).length /
        (module?.steps?.length || 1)) *
      100
    )
  }

  return (
    <AppLayout activePage="/modules">
      <AppContainer>
        <h1>Module Quiz</h1>

        <p>Name the Spanish word for each of the following English words:</p>

        <table>
          <tbody>
            {module?.steps?.map((step, stepIndex) => (
              <SurveyQuestion
                key={stepIndex}
                questionIndex={stepIndex}
                question={step.english}
                answer={step.spanish}
                setQuestionCorrect={setQuestionCorrect}
              />
            ))}
          </tbody>
        </table>

        <button onClick={() => onClickSubmit()}>Submit</button>

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

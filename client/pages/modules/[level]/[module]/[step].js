import AppLayout from "../../../../components/layout/AppLayout"

import { getModule } from "../../../../utils/query/material"

import ActiveStep from "../../../../components/game/ActiveStep"

import StepActionBar from "../../../../components/game/StepActionBar"

import AppContainer from "../../../../components/common/AppContainer"

import { useState } from "react"

import { useRouter } from "next/router"

export default function ModuleStep({ level, module, stepIndex, step }) {
  const router = useRouter()
  const [doneIndex, setDoneIndex] = useState(-1)

  const nextPage = () => {
    router.push(`/modules/${level.id}/${module.id}/${stepIndex + 1 + 1}`)
  }

  // TODO temp
  const onCorrect = () => {
    setDoneIndex(stepIndex)
    nextPage()
  }

  const onIncorrect = () => {
    // console.log("incorrect")
  }

  return (
    <AppLayout activePage="/modules">
      <AppContainer>
        {module && step ? (
          <ActiveStep
            done={doneIndex == stepIndex}
            onCorrect={onCorrect}
            onIncorrect={onIncorrect}
            actionBar={<StepActionBar module={module} stepIndex={stepIndex} />}
            step={step}
          />
        ) : null}
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

  const stepIndex = parseInt(params.step) - 1

  if (stepIndex >= module.steps.length) {
    return {
      redirect: {
        destination: "/" + ["modules", level.id, module.id, "survey"].map((c) => encodeURIComponent(c)).join("/"),
        permanent: false,
      },
    }
  }
  
  const step = module?.steps?.[stepIndex]

  if (!level || stepIndex == -1 || !module) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      level,
      module,
      stepIndex,
      step,
    },
  }
}

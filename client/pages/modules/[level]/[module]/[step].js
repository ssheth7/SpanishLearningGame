import AppLayout from "../../../../components/layout/AppLayout"

import { getAllLevels, getModule } from "../../../../utils/query/material"

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
  const previousPage = () => {
    if (stepIndex == 0) return
    router.push(`/modules/${level.id}/${module.id}/${stepIndex}`)
  }

  // TODO temp

  return (
    <AppLayout activePage="/modules">
      <AppContainer>
        {module && step ? (
          <ActiveStep
            done={doneIndex == stepIndex}
            actionBar={<StepActionBar module={module} stepIndex={stepIndex} />}
            step={step}
            nextPage={nextPage}
            previousPage={previousPage}
          />
        ) : null}
        <button onClick={() => previousPage()}>Back</button>
        <button onClick={() => nextPage()}>Forward</button>
      </AppContainer>
    </AppLayout>
  )
}

export async function getStaticPaths() {
  // TODO fix fallbacks to be properly optimized

  const levels = Object.values(await getAllLevels())

  let paths = []
  for (let level of levels) {
    for (let module of level.modules) {
      for (let step in module.steps) {
        paths.push({
          params: {
            level: level.id,
            module: module.id,
            step: step + 1,
          },
        })
      }
    }
  }

  return { paths, fallback: true }
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

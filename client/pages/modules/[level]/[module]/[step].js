import AppLayout from "../../../../components/layout/AppLayout"

import { getAllLevels, getModule } from "../../../../utils/query/material"

import ActiveStep from "../../../../components/game/ActiveStep"

import StepActionBar from "../../../../components/game/StepActionBar"

import AppContainer from "../../../../components/common/AppContainer"

import { useState, useEffect } from "react"

import { useRouter } from "next/router"

import { useAuth } from "../../../../utils/hooks/auth"

export default function ModuleStep({ level, module, stepIndex, step }) {
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      if (!!user && user._id) return
      window.location.href = "/auth/login?redirect=" + encodeURIComponent(window.location.pathname)
    }
  }, [user])

  const router = useRouter()
  const [doneIndex, setDoneIndex] = useState(-1)

  const nextPage = () => {
    router.push()
  }
  const previousPage = () => {
    if (stepIndex == 0) return
  }

  // TODO temp

  return (
    <AppLayout activePage="/modules">
      <AppContainer>
        {module && step ? (
          <ActiveStep
            done={doneIndex == stepIndex}
            actionBar={
              <StepActionBar
                module={module}
                nextPage={`/modules/${level.id}/${module.id}/${stepIndex + 1 + 1}`}
                previousPage={`/modules/${level.id}/${module.id}/${stepIndex}`}
                stepIndex={stepIndex}
              />
            }
            step={step}
            nextPage={nextPage}
            previousPage={previousPage}
          />
        ) : null}
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

  console.log("Generating paths for modules", paths)

  return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
  // TODO error handling

  const { level, module } = await getModule({ levelID: params.level, moduleID: params.module })

  const stepIndex = parseInt(params.step) - 1

  if (stepIndex >= module.steps.length) {
    return {
      redirect: {
        destination: "/" + ["modules", level.id, module.id, "survey"].map((c) => encodeURIComponent(c)).join("/") + "?final",
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

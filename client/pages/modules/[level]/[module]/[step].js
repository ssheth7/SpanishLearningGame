import AppLayout from "../../../../components/layout/AppLayout"

import { getModule } from "../../../../utils/query/material"

import ActiveStep from "../../../../components/game/ActiveStep"

import StepActionBar from "../../../../components/game/StepActionBar"

import AppContainer from "../../../../components/common/AppContainer"

export default function ModuleStep({ level, module, stepIndex, step }) {
  return (
    <AppLayout activePage="/modules">
      <AppContainer>
        {/* <h1>ModuleStep Debug</h1> */}

        {module && step ? (
          <>
            <ActiveStep actionBar={<StepActionBar module={module} stepIndex={stepIndex} />} step={step} />
          </>
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

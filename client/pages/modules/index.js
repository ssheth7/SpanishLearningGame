import AppLayout from "../../../../components/layout/AppLayout"

import { getModule } from "../../../../utils/query/material"

export default function ModulesPage({}) {
  return (
    <AppLayout activePage="/modules">
      <h1>Post-module survey</h1>

      {/* TODO */}
    </AppLayout>
  )
}

export async function getStaticPaths() {
  // TODO fix fallbacks to be properly optimized
  return { paths: [], fallback: true }
}

export const getStaticProps = async ({}) => {
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

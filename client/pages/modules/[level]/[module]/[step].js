import AppLayout from "../../../../components/layout/AppLayout"

import { getModule } from "../../../../utils/query/material"

export default function ModuleStep({ level, module, stepIndex, step }) {
  return (
    <AppLayout activePage="/">
      <h1>ModuleStep Debug</h1>

      <code>
        <pre>
          <code>{JSON.stringify({ level, module, stepIndex, step }, null, 2)}</code>
        </pre>
      </code>
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

  const stepIndex = parseInt(params.step)
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

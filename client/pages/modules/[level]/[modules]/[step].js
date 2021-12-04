import AppLayout from "../components/layout/AppLayout"

import { getAllLevels } from "../utils/query/material"

export default function ModuleStep({ level, module, step }) {
  return <AppLayout activePage="/">
        <h1>ModuleStep</h1>


  </AppLayout>
}

export const getStaticProps = async () => {
  const allLevels = await getAllLevels()

  return {
    props: {
      levels: allLevels || [],
    },
  }
}

import AppLayout from "../../components/layout/AppLayout"

import { getAllLevels } from "../../utils/query/material"

// TODO make prettier
export default function ModulesPage({ levels }) {
  console.log({ levels })
  return (
    <AppLayout activePage="/modules">
      <h1>Available modules</h1>

      {levels ? (
        levels.map((level) => (
          <div key={level.id}>
            <h2>{level.title}</h2>
            <p>{level.description}</p>
            <ul>
              {level.modules.map((module) => (
                <li key={module.id}>
                  <a href={`/modules/${level.id}/${module.id}`}>{module.title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>Just a sec, we're getting things ready...</p>
      )}
    </AppLayout>
  )
}

export const getStaticProps = async ({}) => {
  // TODO error handling

  const levels = Object.values(await getAllLevels({}))

  return {
    props: {
      levels,
    },
  }
}

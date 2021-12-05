import AppLayout from "../../components/layout/AppLayout"

import { getAllLevels } from "../../utils/query/material"

import styles from "./index.module.css"

import AppContainer from "../../components/common/AppContainer"

// TODO make prettier
export default function ModulesPage({ levels }) {
  return (
    <AppLayout activePage="/modules">
      <AppContainer>
        <h1>Available modules</h1>

        {levels ? (
          levels.map((level) => (
            <div className={styles.module} key={level.id}>
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
      </AppContainer>
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

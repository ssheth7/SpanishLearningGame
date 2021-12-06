import AppLayout from "../../components/layout/AppLayout"

import { getAllLevels } from "../../utils/query/material"

import styles from "./index.module.css"

import AppContainer from "../../components/common/AppContainer"

import { useAuth } from "../../utils/hooks/auth"
import { useEffect, useState } from "react"

// TODO make prettier
export default function ModulesPage({ levels }) {
  const { user, loading } = useAuth()
  const [grades, setGrades] = useState({})

  useEffect(() => {
    if (!loading && !user) {
      window.location.href = "/auth/login?redirect=" + encodeURIComponent(window.location.pathname)
    }
  }, [user, loading])

  useEffect(async () => {
    if (!user) return

    const getURL = "/api/quiz/grades"
    const { grades } = await (await fetch(getURL)).json()

    setGrades(grades)
  }, [user])

  const findGrade = (moduleid) => {
    if (moduleid in grades) return grades[moduleid].grade
    return null
  }

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
                    <a href={`/modules/${level.id}/${module.id}`}>
                      {findGrade(module.id) || "--"}% - <strong>{module.title}</strong>
                    </a>
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

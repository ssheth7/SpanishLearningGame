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
  }, [user])

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

  const renderImprovement = (moduleid) => {
    if (!(moduleid in grades)) return null
    let { attempts } = grades[moduleid]
    if (attempts.length < 2) return null
    attempts = attempts.map((a) => a.grade)

    const maxAttempt = Math.max(...attempts)
    const minAttempt = Math.min(...attempts)

    console.log({ attempts, maxAttempt, minAttempt })

    const improvement = maxAttempt - minAttempt

    return (
      <span className={styles.improvementText}>
        ({improvement > 0 ? "+" : ""}
        {Math.floor(improvement)}% improvement)
      </span>
    )
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
                      {Math.floor(findGrade(module.id)) || "--"}% - <strong>{module.title}</strong>{" "}
                      {renderImprovement(module.id)}
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

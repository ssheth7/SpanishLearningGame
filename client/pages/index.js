import AppLayout from "../components/layout/AppLayout"
import Footer from "../components/layout/Footer"
import { getAllLevels } from "../utils/query/material"
import AppContainer from "../components/common/AppContainer"
import Jumbotron from "../components/common/Jumbotron"

import CardLayout from "../components/common/CardLayout"

import { useAuth } from "../utils/hooks/auth"
export default function Home({ levels = [] }) {
  const { user, loading } = useAuth()

  return (
    <div style={{ backgroundColor: "white" }}>
      <AppLayout activePage="/">
        <AppContainer>
          <Jumbotron>
            <h1>Spanish Learning Game</h1>
            <h2>Making learning fun.</h2>
          </Jumbotron>
          <section>
            <h2>Levels we offer</h2>
            <p>We offer a wide range of levels to help you learn Spanish. Start where you see fit.</p>
            <CardLayout>
              {(levels || []).map(({ id, title, description, pages }) => (
                <div key={id} style={{ background: "#ecf6f6" }}>
                  <h4>{title}</h4>
                  <p>{description}</p>
                  <button
                    variant="success"
                    onClick={(e) => {
                      e.preventDefault()
                      location.href = String("/auth/signup")
                    }}
                  >
                    {" "}
                    Start {title} &rarr;{" "}
                  </button>
                </div>
              ))}
            </CardLayout>
          </section>
        </AppContainer>
      </AppLayout>

      {/* call to action */}

      <hr />
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const allLevels = await getAllLevels()

  return {
    props: {
      levels: Object.values(allLevels) || [],
    },
  }
}

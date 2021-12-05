import AppLayout from "../components/layout/AppLayout"
import { Button, Col, Row, Container, Card } from "react-bootstrap"
import Footer from "../components/layout/Footer"
import { getAllLevels } from "../utils/query/material"
import AppContainer from "../components/common/AppContainer"
import Jumbotron from "../components/common/Jumbotron"

import CardLayout from "../components/common/CardLayout"
export default function Home({ levels = [] }) {
  return (
    <div style={{ backgroundColor: "white" }}>
      <AppLayout activePage="/">
        <AppContainer>
          <Jumbotron>
            <h1>Spanish Learning Game</h1>
            <h2>Making learning fun.</h2>
          </Jumbotron>
          <CardLayout>
            {(levels || []).map(({ id, title, description }) => (
              <div style={{ background: "#ecf6f6" }}>
                <h4>{title}</h4>
                <p>{description}</p>
                <button variant="success"> Start {title} &rarr; </button>
              </div>
            ))}
          </CardLayout>
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

  console.log(allLevels)

  return {
    props: {
      levels: Object.values(allLevels) || [],
    },
  }
}

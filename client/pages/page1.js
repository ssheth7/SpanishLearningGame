import AppLayout from "../components/layout/AppLayout"
import { Button, Col, Row, Container, Card } from "react-bootstrap"

import { getAllLevels } from "../utils/query/material"

var count = ["1", "2", "3", "4", "5"]

export default function Home({ levels = [] }) {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <AppLayout activePage="/">
        <h1 style={{ color: "green", textAlign: "center" }}>Spanish Learning Game</h1>
        <h2 style={{ color: "green", textAlign: "center" }}> Beginner </h2>
        <hr />
        <Col style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
          <img
            src={"https://assets2.varsitytutors.com/vt-ecom-catalog-ui/images/products/Beginner_Spanish_254-2x.jpg"}
            alt="EasySpanish"
            style={{}}
          />
        </Col>
        <h2 style={{ color: "green", textAlign: "center" }}> Modules & Quizes Below</h2>
        <Container fluid>
          {count.map((number) => (
            <Row style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
              <div>
                <Col>
                  <Button
                    size="lg"
                    variant="success"
                    onClick={(e) => {
                      e.preventDefault()
                      location.href = String(pages)
                    }}
                  >
                    Module {number}
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="success"
                    onClick={(e) => {
                      e.preventDefault()
                      location.href = String(pages)
                    }}
                  >
                    Quiz {number}
                  </Button>
                </Col>
              </div>
            </Row>
          ))}
        </Container>
      </AppLayout>
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

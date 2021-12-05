import AppLayout from "../components/layout/AppLayout"
import { Button, Col, Row, Container, Card } from "react-bootstrap"

import { getAllLevels } from "../utils/query/material"

export default function Home({ levels = [] }) {
  console.log({ levels })
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

        <h2 style={{ color: "green", textAlign: "center" }}>Modules -------------- Quiz</h2>

        <Container fluid>
          <Row style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
            {(levels || []).map(({ id, title, description, pages }) => (
              <Col border="dark" xl={3} key={id}>
                <Card style={{ width: "25rem", borderRadius: "25px", background: "#00cc44" }}>
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    {/* <Link to={pages}> */}
                    <Button
                      variant="success"
                      onClick={(e) => {
                        e.preventDefault()
                        location.href = String(pages)
                      }}
                    >
                      Begin {title} Modules
                    </Button>
                    {/* </Link> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        {(levels || []).map(({ id, title, description }) => (
          <div key={id}>
            <h3 style={{ color: "green", textAlign: "center" }}>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </AppLayout>

      {/* call to action */}
      <button style={{ height: "60px", width: "200" }}> Start modules now </button>
      <button style={{ height: "60px", width: "200" }}>
        <a href="https://forms.gle/XMU5LQqEcPnC7Fi58" target="_blank">
          {" "}
          Website Response Form
        </a>
      </button>
      <button style={{ height: "60px", width: "200" }}>
        <a href="https://forms.gle/VbvCi4eiXm3jEL398" target="_blank">
          {" "}
          Module Response Form
        </a>
      </button>
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

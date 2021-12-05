import AppLayout from "../components/layout/AppLayout"
import {Button, Col, Row, Container, Card} from "react-bootstrap"
import Footer from "../components/layout/Footer"
import { getAllLevels } from "../utils/query/material"

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home({ levels = [] }) {
  console.log({ levels })
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <AppLayout activePage="/">
        <h1 style={{ color: "green", textAlign: "center" }}>Spanish Learning Game</h1>
        <h2 style={{ color: "green", textAlign: "center" }}> Make It Fun To Learn SPANISH </h2>
        <hr />
        <Col style={{textAlign: "center", display: "flex", justifyContent: "center"}}>
        
        <img
          src={
            "https://media.istockphoto.com/vectors/spanish-language-hand-drawn-doodles-and-lettering-vector-id1082074870?k=20&m=1082074870&s=612x612&w=0&h=qte14fBvZRl1eRBI2GKc-q7N6HvPTtiRnBi6NKMdaL0="
          }
          alt="EasySpanish"
          style={{ }}
        />
        </Col>
        <br></br>
        <h2 style={{ color: "green", textAlign: "center" }}>Levels of Difficulty We Offer</h2>
        <br></br>
        <Container fluid>
          <Row style={{textAlign: "center", display: "flex", justifyContent: "center"}}>
            {(levels || []).map(({ id, title, description }) => (
                  <Col border="dark" xl={3} key={id}>
                    <Card  style={{width: "25rem", borderRadius: "25px", background: "#00cc44" }}>
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                          <Card.Text>{description}</Card.Text>
                            <Button variant="success" > Begin {title} Modules </Button>
                        </Card.Body>    
                    </Card>
                  </Col>
            ))}
          </Row>
        </Container>
      </AppLayout>

      {/* call to action */}
      

      <hr />
      <Footer/>
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

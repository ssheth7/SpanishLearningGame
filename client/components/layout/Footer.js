import React from "react"
import { Row, Col, Box } from "react-bootstrap"

import AppContainer from "../common/AppContainer"

const Footer = () => {
  const xlsize = 2
  return (
    <footer>
      <AppContainer>
        <h4 style={{ color: "black", textAlign: "center" }}>Comments? We&apos;d love to hear from you.</h4>
        <p style={{ color: "black", textAlign: "center" }}>
          We value our user&apos;s feedback and look to improve our website and usability. We aim to make a site that is easy
          to learn and easy to navigate. Please complete the survey below.
        </p>
        <Row style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
          <a href="https://forms.gle/XMU5LQqEcPnC7Fi58">Website Response Form</a>
        </Row>
      </AppContainer>
      <br></br>
    </footer>
  )
}

export default Footer

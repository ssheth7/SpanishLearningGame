import React from 'react'
import {Container, Row, Col, Box} from 'react-bootstrap'

const Footer = ()  => {
    const xlsize = 2;
    return (
        <>
        <h4 style={{ color: "black", 
            textAlign: "center", 
            marginTop: "50px" }}>
             Please Rate Our Website And Voice Your Concerns 
        </h4>
        <p style={{ color: "black", 
            textAlign: "center"}}>
            We value our user's feedback and look to improve our website and usability. We aim to make a site that is easy to learn and easy to navigate. Please complete the survey below.
        </p>
        <Container>
            <Row style={{textAlign: "center", display: "flex", justifyContent: "center"}}>
            <Col xl={xlsize}>
                <a style={{color: "green"}} href="https://forms.gle/XMU5LQqEcPnC7Fi58">Website Response Form</a>
            </Col>
            <Col xl={xlsize}>
                <a style={{color: "green"}} href="https://forms.gle/VbvCi4eiXm3jEL398">Module Response Form</a>
            </Col>
            </Row>
        </Container>
        <br></br>
    </>
    );
};

export default Footer;
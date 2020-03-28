import React from 'react';
import {
    Card, CardBody, Col, Row
} from 'reactstrap';

const Footer = (props) => {


    return (
        <Card className={"footer-card"}>
            <CardBody>
                <Row className={"your-money-cards justify-content-center"}>
                <Col sm="3 align-self-center">
                    <span className="intro-subtitle">
                        Made with <span title={"Make America Think Harder"}>MATH</span> & <span className="heart" />
                    </span>
                </Col>

                <Col sm="3 align-self-center">
                    Not affiliated with any organization
                </Col>

                <Col sm="3 align-self-center">
                    <b><a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeiYOxe2tr-QuISfHPuJ_H7sJq05YMJ1VNcpgMUEn3pFqn8pg/viewform"
                        target="_blank">
                        Send Feedback
                    </a></b>
                </Col>

                <Col sm="3 align-self-center">
                    Email: <a href="mailto:stimulus.999@gmail.com" target="_blank">stimulus.999@gmail.com</a>
                </Col>

                <div className={"estimate-disclaimer"}>
                    Disclaimer: This site is for information purposes only. This site does not provide tax, legal or accounting advice.
                </div>

                </Row>
            </CardBody>
        </Card>
    );
}

export default Footer;
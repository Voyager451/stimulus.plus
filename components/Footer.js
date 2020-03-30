import React from 'react';
import {
    Card, CardBody, Col, Row,
} from 'reactstrap';

const Footer = () => (
    <Card className={ 'footer-card' }>
        <CardBody>
            <Row className={ 'your-money-cards justify-content-center' }>

                <Col sm="2 align-self-center">
                    <b><a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeiYOxe2tr-QuISfHPuJ_H7sJq05YMJ1VNcpgMUEn3pFqn8pg/viewform"
                        target="_blank" rel='noreferrer noopener'>
                        View Source Code
                    </a></b>
                </Col>

                <Col sm="2 align-self-center">
                    <b><a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeiYOxe2tr-QuISfHPuJ_H7sJq05YMJ1VNcpgMUEn3pFqn8pg/viewform"
                        target="_blank" rel='noreferrer noopener'>
                        Send Feedback
                    </a></b>
                </Col>

                <Col sm="3 align-self-center">
                    Contact:&nbsp;
                    <a href="mailto:hello@stimulus.plus" target="_blank" rel='noreferrer noopener'>
                        hello@stimulus.plus
                    </a>
                </Col>

                <Col sm="3 align-self-center">
                    Not affiliated with any organization
                </Col>

                <div className={ 'estimate-disclaimer' }>
                    Disclaimer: This site is for information purposes only.
                    This site does not provide tax, legal or accounting advice.
                </div>

            </Row>
        </CardBody>
    </Card>
);

export default Footer;

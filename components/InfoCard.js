import React from 'react';
import {
    Col, ListGroup, ListGroupItem, Row,
} from 'reactstrap';

const InfoCard = () => {

    return (
        <Row>

            <Col sm="6">

                <ListGroup>

                    <ListGroupItem
                        tag="a"
                        href="https://www.bankrate.com/banking/savings/rates/#survey"
                        target="_blank"
                        rel='noreferrer noopener'
                    >
                        What Americans plan to do with stimulus checks - Bankrate
                    </ListGroupItem>

                    <ListGroupItem
                        tag="a"
                        href="https://www.nytimes.com/article/coronavirus-stimulus-package-questions-answers.html"
                        target="_blank"
                        rel='noreferrer noopener'
                    >
                        Comprehensive FAQ for the stimulus - New York Times
                    </ListGroupItem>

                    <ListGroupItem
                        tag="a"
                        href="https://www.forbes.com/sites/advisor/2020/03/27/your-guide-to-the-federal-stimulus-package/#51cc1bcb2711"
                        target="_blank"
                        rel='noreferrer noopener'
                    >
                        Guide to the stimulus - Forbes
                    </ListGroupItem>

                    <ListGroupItem
                        tag="a"
                        href="https://www.miamiherald.com/news/local/immigration/article241531211.html"
                        target="_blank"
                        rel='noreferrer noopener'
                    >
                        Stimulus info for immigrants - Miami Herald
                    </ListGroupItem>

                    <ListGroupItem
                        tag="a"
                        href="https://www.politico.com/news/2020/03/25/whats-in-stimulus-package-coronavirus-149282"
                        target="_blank"
                        rel='noreferrer noopener'
                    >
                        Comprehensive info for the stimulus - Politico
                    </ListGroupItem>

                </ListGroup>
            </Col>

            <Col sm="6">

                <ListGroup>

                    <ListGroupItem
                        tag="a"
                        href="https://movehumanityforward.com/covid-relief/"
                        target="_blank"
                        rel='noreferrer noopener'
                    >
                        Financial aid for individuals affected - Humanity Forward
                    </ListGroupItem>

                    <ListGroupItem
                        tag="a"
                        href="http://scottsantens.com/unconditional-pandemic-security-emergency-ubi"
                        target="_blank"
                        rel='noreferrer noopener'
                    >
                        Combating the fear of the unknown with Universal
                        Basic Income during a pandemic - Scott Santens
                    </ListGroupItem>

                    <ListGroupItem
                        tag="a"
                        href="https://www.npr.org/2020/03/26/821457551/whats-inside-the-senate-s-2-trillion-coronavirus-aid-package"
                        target="_blank"
                        rel='noreferrer noopener'
                    >
                        Stimulus bill money breakdown - NPR
                    </ListGroupItem>

                    <ListGroupItem
                        tag="a"
                        href="https://www.documentcloud.org/documents/6819239-FINAL-FINAL-CARES-ACT.html"
                        target="_blank"
                        rel='noreferrer noopener'
                    >
                        The full stimulus bill (CARES Act) document
                    </ListGroupItem>

                </ListGroup>

            </Col>

        </Row>
    );
};

export default InfoCard;

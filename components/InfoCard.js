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
                        href="https://www.npr.org/2020/03/26/821457551/whats-inside-the-senate-s-2-trillion-coronavirus-aid-package"
                        target="_blank"
                        rel='noreferrer noopener'
                    >
                        Stimulus bill money breakdown - NPR
                    </ListGroupItem>

                    <ListGroupItem
                        tag="a"
                        href="https://www.reddit.com/r/dataisbeautiful/comments/fppc7v/oc_where_the_money_goes_in_the_us_senates_2t/"
                        target="_blank"
                        rel='noreferrer noopener'
                    >
                        Stimulus bill money breakdown - Reddit graphic
                    </ListGroupItem>

                    <ListGroupItem
                        tag="a"
                        href="https://www.documentcloud.org/documents/6819239-FINAL-FINAL-CARES-ACT.html"
                        target="_blank"
                        rel='noreferrer noopener'
                    >
                        The full stimulus bill (CARES Act) document
                    </ListGroupItem>

                    <ListGroupItem
                        tag="a"
                        href="https://www.forbes.com/sites/advisor/2020/03/27/your-guide-to-the-federal-stimulus-package/#51cc1bcb2711"
                        target="_blank"
                        rel='noreferrer noopener'
                    >
                        Stimulus package guide - Forbes
                    </ListGroupItem>

                </ListGroup>

            </Col>

            <Col sm="6">

                <ListGroup>

                    <ListGroupItem
                        tag="a"
                        href="https://www.washingtonpost.com/graphics/business/coronavirus-stimulus-check-calculator/"
                        target="_blank"
                        rel='noreferrer noopener'
                    >
                        Stimulus info & calculator - Washington Post
                    </ListGroupItem>

                    <ListGroupItem
                        tag="a"
                        href="https://www.nytimes.com/2020/03/25/us/politics/whats-in-coronavirus-stimulus-bill.html"
                        target="_blank"
                        rel='noreferrer noopener'
                    >
                        Stimulus info - New York Times
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
                        href="https://www.omnicalculator.com/finance/stimulus-payment"
                        target="_blank"
                        rel='noreferrer noopener'
                    >
                        Stimulus info & calculator - Omni Calculator
                    </ListGroupItem>

                </ListGroup>
            </Col>
        </Row>
    );
};

export default InfoCard;

import React from 'react';
import {
    Col, ListGroup, ListGroupItem, Row
} from 'reactstrap';

const InfoCard = (props) => {

    return (
        <Row >

            <Col sm="6">

                <ListGroup>
                    <ListGroupItem
                        tag="a"
                        href="https://movehumanityforward.com"
                        target="_blank"
                    >
                        Pushing for Universal Basic Income - Humanity Forward
                    </ListGroupItem>
                </ListGroup>

                <ListGroup>
                    <ListGroupItem
                        tag="a"
                        href="https://www.npr.org/2020/03/26/821457551/whats-inside-the-senate-s-2-trillion-coronavirus-aid-package"
                        target="_blank"
                    >
                        Stimulus bill money breakdown - NPR
                    </ListGroupItem>
                </ListGroup>

                <ListGroup>
                    <ListGroupItem
                        tag="a"
                        href="https://www.reddit.com/r/dataisbeautiful/comments/fppc7v/oc_where_the_money_goes_in_the_us_senates_2t/"
                        target="_blank"
                    >
                        Stimulus bill money breakdown - Reddit graphic
                    </ListGroupItem>
                </ListGroup>

            </Col>

            <Col sm="6">

                <ListGroup>

                    <ListGroupItem
                        tag="a"
                        href="https://www.washingtonpost.com/graphics/business/coronavirus-stimulus-check-calculator/"
                        target="_blank"
                    >
                        Stimulus info & calculator - Washington Post
                    </ListGroupItem>

                    <ListGroupItem
                        tag="a"
                        href="https://www.nytimes.com/2020/03/25/us/politics/whats-in-coronavirus-stimulus-bill.html"
                        target="_blank"
                    >
                        Stimulus info - New York Times
                    </ListGroupItem>

                    <ListGroupItem
                        tag="a"
                        href="https://www.miamiherald.com/news/local/immigration/article241531211.html"
                        target="_blank"
                    >
                        Stimulus info for immigrants - Miami Herald
                    </ListGroupItem>

                    <ListGroupItem
                        tag="a"
                        href="https://www.omnicalculator.com/finance/stimulus-payment"
                        target="_blank"
                    >
                        Stimulus info & calculator - Omni Calculator
                    </ListGroupItem>

                </ListGroup>
            </Col>
        </Row>
    );
}

export default InfoCard;
import React from 'react';
import {
    Button, ButtonGroup, Card, CardBody, CardHeader, CardText, Col, CustomInput, Input,
    Label, ListGroup, ListGroupItem, Row
} from 'reactstrap';

const InfoCard = (props) => {

    return (
        <Card className={""}>
            <CardHeader>Stimilus Resources</CardHeader>
            <CardBody>
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

                </ListGroup>
            </CardBody>
        </Card>
    );
}

export default InfoCard;
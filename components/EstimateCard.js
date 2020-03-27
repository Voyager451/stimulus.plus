import React, { useState } from 'react';
import {
    Button, ButtonGroup, Card, CardBody, CardHeader, CardText, Col, CustomInput, Input,
    Label, Row
} from 'reactstrap';

const EstimateCard = (props) => {

    return (
        <Card className={""}>
            <CardHeader>Payment Estimate*</CardHeader>
            <CardBody>
                <Row className={"your-money-cards justify-content-center"}>
                    <Col sm="3 align-self-center">
                        <Card body className="your-money-total">
                            <h5>Total 💵</h5>
                            <CardText id={"total-stimulus"}>$500</CardText>
                        </Card>
                    </Col>

                    <Col sm="1 align-self-center">
                        <span className={"your-money-sign"}>=</span>
                    </Col>

                    <Col sm="3 align-self-center">
                        <Card body className={""}>
                            <h6 className={"your-money-info-title"}>Based on Children</h6>
                            <CardText className={"your-money-info-amount"}>$500</CardText>
                        </Card>
                    </Col>

                    <Col sm="1 align-self-center">
                        <span className={"your-money-sign"}>+</span>
                    </Col>

                    <Col sm="3 align-self-center">
                        <Card body className={""}>
                            <h6 className={"your-money-info-title"}>Based on Income</h6>
                            <CardText className={"your-money-info-amount"}>$500</CardText>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <div className={"estimate-disclaimer"}>
                    *Disclaimer: This is for informational purposes only. This site does not provide tax, legal or accounting advice.
                </div>
            </CardBody>
        </Card>
    );
}

export default EstimateCard;
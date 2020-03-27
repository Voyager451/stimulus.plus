import React from "react";
import { withRedux } from '../lib/redux';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardHeader,
    Container, Row, Col,
    Navbar, NavbarBrand, NavbarToggler,
    Nav, FormGroup,
    Input, Dropdown, DropdownItem,
    CustomInput, Label, Badge,
    Toast, ToastBody, ToastHeader,
    ButtonToggle
} from 'reactstrap';

import TaxFilingCard from "../components/TaxFilingCard";
import IncomeCard from "../components/IncomeCard";
import EstimateCard from "../components/EstimateCard";
import ChildrenCard from "../components/ChildrenCard";
import InfoCard from "../components/InfoCard";
import Footer from "../components/Footer";

class Index extends React.Component {

    render() {

        return (
            <div>
                <Navbar expand="md" className={"justify-content-center"}>
                    <NavbarBrand href="/">stimulus.plus</NavbarBrand>
                </Navbar>

                <Container>
                    <div style={{marginBottom: '25px', textAlign: 'center'}}>
                        <h3 className="intro-stimulus">💵 Calculate your <span
                            title={"Coronavirus"}>COVID-19</span> stimulus payment</h3>
                    </div>
                    <Row>
                        <Col sm="4">
                            <TaxFilingCard
                                {...this.props}
                                setFilingYear={this.setFilingYear}
                                setFilingStatus={this.setFilingStatus}
                            />
                        </Col>
                        <Col sm="2">
                            <ChildrenCard/>
                        </Col>
                        <Col sm="6">
                            <IncomeCard/>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '25px'}} className={"justify-content-center"}>
                        <Col sm="9">
                            <EstimateCard/>
                        </Col>
                        <div className="alert alert-primary" role="alert"
                             style={{marginTop: '16px'}}>
                            Like the idea of direct payments to individuals? Consider
                            supporting&nbsp;
                            <b><a href={'https://movehumanityforward.com/'} target="_blank">Universal
                                Basic Income</a></b>.
                        </div>
                    </Row>
                    <Row>
                        <Col sm="12">
                            <InfoCard/>
                        </Col>
                    </Row>

                    <Row style={{marginTop: '25px', marginBottom: '25px'}}>
                        <Col sm="12">
                            <Footer/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRedux(Index)
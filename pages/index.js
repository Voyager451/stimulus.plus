import React from "react";
import { withRedux } from '../lib/redux';

import {
    Container, Row, Col,
    Navbar, NavbarBrand
} from 'reactstrap';

import TaxFilingCard from "../components/TaxFilingCard";
import IncomeCard from "../components/IncomeCard";
import EstimateCard from "../components/EstimateCard";
import ChildrenCard from "../components/ChildrenCard";
import ResourceCard from "../components/InfoCard";
import Footer from "../components/Footer";

class Index extends React.Component {

    render() {

        return (
            <div>
                <title>Stimulus Payment Calculator - Stimulus.Plus</title>
                <Navbar expand="md" className={"justify-content-center"}>
                    <NavbarBrand href="/">stimulus.plus</NavbarBrand>
                </Navbar>

                <Container>
                    <div className="intro-stimulus-wrap">
                        <h3 className="intro-stimulus">💵 Calculate your <span
                            title={"Coronavirus"}>COVID-19</span> stimulus payment</h3>
                    </div>
                    <Row>
                        <Col sm="4">
                            <TaxFilingCard/>
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
                    </Row>

                    <Row style={{marginTop: '25px'}}>
                        <Col sm="12">
                            <ResourceCard/>
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
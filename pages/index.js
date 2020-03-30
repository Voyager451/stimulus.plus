import React from 'react';
import {
    Container, Row, Col,
    Navbar, NavbarBrand, Alert,
} from 'reactstrap';
import { withRedux } from '../lib/redux';


import TaxFilingCard from '../components/TaxFilingCard';
import IncomeCard from '../components/IncomeCard';
import EstimateCard from '../components/EstimateCard';
import ChildrenCard from '../components/ChildrenCard';
import ResourceCard from '../components/InfoCard';
import Footer from '../components/Footer';

const Index = () => {

    return (
        <div>
            <title>Stimulus Payment Calculator</title>
            <Navbar expand="md" className={ 'justify-content-center' }>
                <NavbarBrand href="/">stimulus.plus</NavbarBrand>
            </Navbar>

            <Container>
                <div className="intro-stimulus-wrap">
                    <h3 className="intro-stimulus">Calculate your <span title={ 'Coronavirus' }>COVID-19</span> stimulus payment 💰</h3>
                </div>

                <Alert className={ 'text-center' } color="primary" style={ { marginTop: '18px' } }>
                    You will likely get your money by mid-April via&nbsp;
                    <b>
                        <a
                            href="https://www.forbes.com/sites/advisor/2020/03/27/your-guide-to-the-federal-stimulus-package/#51cc1bcb2711"
                            target="_blank" rel='noreferrer noopener'
                            className="alert-link"
                        >
                            direct-deposit or a check in the mail
                        </a>
                    </b>
                    .
                </Alert>

                <Row>
                    <Col sm="5">
                        <TaxFilingCard/>
                    </Col>
                    <Col sm="4">
                        <IncomeCard/>
                    </Col>
                    <Col sm="3">
                        <ChildrenCard/>
                    </Col>
                </Row>

                <Row style={ { marginTop: '25px' } } className={ 'justify-content-center' }>
                    <Col sm="9">
                        <EstimateCard/>
                    </Col>
                </Row>

                <Row style={ { marginTop: '0' } }>
                    <Col sm="12">
                        <ResourceCard/>
                    </Col>
                </Row>

                <Row style={ { marginTop: '25px', marginBottom: '25px' } }>
                    <Col sm="12">
                        <Footer/>
                    </Col>
                </Row>
            </Container>
        </div>
    );

};

export default withRedux(Index);

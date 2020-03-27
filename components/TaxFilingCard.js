import React  from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import {
    Button, ButtonGroup, Card, CardBody, CardHeader, CardText, Col,
    Label
} from 'reactstrap';

const useTaxFilingStatus = () =>
{
    const state =
        useSelector(
            state => ({
                filingYear: state.filingYear,
                filingStatus: state.filingStatus,
            }),
            shallowEqual
        )

    const dispatch = useDispatch()

    const setFilingYear = (val) =>
        dispatch({
            type: 'SET_FILING_YEAR',
            payload: val
        })

    const setFilingStatus = (val) =>
        dispatch({
            type: 'SET_FILING_STATUS',
            payload: val
        })

    return { state, setFilingYear, setFilingStatus }
}

const TaxFilingCard = () => {

    const { state, setFilingYear, setFilingStatus } = useTaxFilingStatus();

    return (
        <Card className={" tax-filing-card"}>
            <CardHeader>Tax Filing Status</CardHeader>
            <CardBody>
                <Label>Did you file 2019 taxes?</Label>
                <ButtonGroup>
                    <Button color="secondary"
                            onClick={() => setFilingYear(2019)}
                            active={state.filingYear === 2019}>
                        Yes
                    </Button>
                    <Button color="secondary"
                            onClick={() => setFilingYear(2018)}
                            active={state.filingYear === 2018}>
                        No
                    </Button>
                </ButtonGroup>
                <hr/>
                <Label>Filing status for <u>{state.filingYear}</u>:</Label>
                <ButtonGroup>
                    <Button color="secondary"
                            onClick={() => setFilingStatus(1)}
                            active={state.filingStatus === 1}>
                        Single
                    </Button>
                    <Button color="secondary"
                            onClick={() => setFilingStatus(2)}
                            active={state.filingStatus === 2}>
                        Married
                    </Button>
                    <Button color="secondary"
                            onClick={() => setFilingStatus(3)}
                            active={state.filingStatus === 3}>
                        Head of Household
                    </Button>
                </ButtonGroup>
            </CardBody>
        </Card>
    );
}

export default TaxFilingCard;
import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import {
    Button, ButtonGroup, Card, CardBody, CardHeader,
    Label, UncontrolledPopover, PopoverBody, Alert,
} from 'reactstrap';

const useState = () => {
    const state = useSelector(
        ({ filingStatus, filingYear, dependentStatus }) => {
            return {
                filingYear,
                filingStatus,
                dependentStatus,
            };
        },
        shallowEqual,
    );

    const dispatch = useDispatch();

    const setFilingYear = (val) => {
        return dispatch({
            type: 'SET_FILING_YEAR',
            payload: val,
        });
    };

    const setFilingStatus = (val) => {
        return dispatch({
            type: 'SET_FILING_STATUS',
            payload: val,
        });
    };

    const setDependentStatus = (val) => {
        return dispatch({
            type: 'SET_DEPENDENT_STATUS',
            payload: val,
        });
    };

    return {
        state, setFilingYear, setFilingStatus, setDependentStatus,
    };
};

const TaxFilingCard = () => {

    const {
        state, setFilingYear, setFilingStatus, setDependentStatus,
    } = useState();

    return (
        <Card className={ ' tax-filing-card' }>
            <CardHeader>Tax Filing Status</CardHeader>
            <CardBody>

                <Label>
                    Did you file your 2019 taxes? {' '} &nbsp;
                    <Button style={ { fontSize: '12px', fontWeight: '700' } }
                        outline type="button" id="fileTaxPopover" color="dark" size="sm">
                        Info
                    </Button>
                    <UncontrolledPopover trigger="focus" placement="top" target="fileTaxPopover">
                        <PopoverBody style={ { fontWeight: '700' } }>
                            If you filed both 2019 and 2018, your 2019 filing will be used.
                            You must have filed either 2019 or 2018 taxes to qualify.
                            If you have not filed 2018, or do not qualify for 2018 filing
                            (e.g. you were a dependent), file your 2019 ASAP.
                        </PopoverBody>
                    </UncontrolledPopover>
                </Label>
                <ButtonGroup>
                    <Button outline color="primary"
                        onClick={ () => { return setFilingYear(2019); } }
                        active={ state.filingYear === 2019 }>
                        Yes
                    </Button>
                    <Button outline color="primary"
                        onClick={ () => { return setFilingYear(2018); } }
                        active={ state.filingYear === 2018 }>
                        No
                    </Button>
                </ButtonGroup>

                <hr/>

                <Label>
                    Were you claimed as a dependent in <u>{state.filingYear}</u>? {' '} &nbsp;
                    <Button style={ { fontSize: '12px', fontWeight: '700' } }
                        outline type="button" id="dependentPopover" color="dark" size="sm">
                        Info
                    </Button>
                    <UncontrolledPopover trigger="focus" placement="top" target="dependentPopover">
                        <PopoverBody style={ { fontWeight: '700' } }>
                            If you were claimed as a dependent on someone else{"'"}s tax return
                            (e.g. your parents), you are not eligible to receive anything ☹.
                            However, if you were no longer a dependent in 2019, and haven{"'"}t filed yet,
                            you should do so ASAP.
                        </PopoverBody>
                    </UncontrolledPopover>
                </Label>
                <ButtonGroup>
                    <Button outline color="primary"
                        onClick={ () => { return setDependentStatus(1); } }
                        active={ state.dependentStatus === 1 }>
                        Yes
                    </Button>
                    <Button outline color="primary"
                        onClick={ () => { return setDependentStatus(0); } }
                        active={ state.dependentStatus === 0 }>
                        No
                    </Button>
                </ButtonGroup>

                <br/>
                { state.dependentStatus === 1
                && (
                    <div className='tax-filing-dependent-yes-msg'>
                        Claimed dependents are ineligible for payment ☹
                    </div>
                )}

                <hr/>

                <Label>Filing status for <u>{state.filingYear}</u>:</Label>
                <ButtonGroup>
                    <Button outline color="primary"
                        onClick={ () => { return setFilingStatus(1); } }
                        active={ state.filingStatus === 1 }>
                        Single
                    </Button>
                    <Button outline color="primary"
                        onClick={ () => { return setFilingStatus(2); } }
                        active={ state.filingStatus === 2 }>
                        Married
                    </Button>
                    <Button outline color="primary"
                        onClick={ () => { return setFilingStatus(3); } }
                        active={ state.filingStatus === 3 }>
                        Head of Household
                    </Button>
                </ButtonGroup>

            </CardBody>
        </Card>
    );
};

export default TaxFilingCard;

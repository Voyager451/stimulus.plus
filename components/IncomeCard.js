import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import {
    Card, CardBody, CardHeader, CardText, CustomInput, Input
} from 'reactstrap';

const useState = () =>
{
    const state =
        useSelector(
            state => ({
                filingYear: state.filingYear,
                incomeAmount: state.incomeAmount,
            }),
            shallowEqual
        )

    const dispatch = useDispatch()

    const setIncomeAmount = (val) =>
        dispatch({
            type: 'SET_INCOME_AMOUNT',
            payload: val
        })

    return { state, setIncomeAmount }
}

const IncomeCard = () => {

    const { state, setIncomeAmount } = useState();

    const maxIncome = 400000;

    return (
        <Card className={""}>
            <CardHeader>Income</CardHeader>
            <CardBody>
                <CardText>
                    Enter your&nbsp;
                    <a href="https://www.irs.gov/e-file-providers/definition-of-adjusted-gross-income"
                       target="_blank">
                        adjusted gross income
                    </a> for <u>{state.filingYear}</u> filing.
                </CardText>
                <Input
                    id="income-input"
                    value={state.incomeAmount}
                    onChange={e => setIncomeAmount(e.target.value)}
                    type="number"
                    placeholder="0"
                    min="0"
                    max={maxIncome}
                    step="1000"
                />
                <br/>
                <CustomInput
                    value={state.incomeAmount}
                    onChange={e => setIncomeAmount(e.target.value)}
                    type="range"
                    step="1000"
                    min="0"
                    max={maxIncome}
                    />
            </CardBody>
        </Card>
    );

}

export default IncomeCard;
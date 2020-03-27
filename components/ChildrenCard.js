import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import {
    Button, ButtonGroup, Card, CardBody, CardHeader, CardText, Col, CustomInput, Input,
    Label, Row
} from 'reactstrap';

const useState = () =>
{
    const state =
        useSelector(
            state => ({
                filingYear: state.filingYear,
                numOfChildren: state.numOfChildren,
            }),
            shallowEqual
        )

    const dispatch = useDispatch()

    const setNumOfChildren = (val) =>
        dispatch({
            type: 'SET_NUM_OF_CHILDREN',
            payload: val
        })

    return { state, setNumOfChildren }
}

const ChildrenCard = () => {

    const { state, setNumOfChildren } = useState();

    return (
        <Card className={" num-of-children-card"}>
            <CardHeader># of Children</CardHeader>
            <CardBody>
                <CardText>In <u>{state.filingYear}</u> filing.</CardText>
                <Input
                    type="number"
                    placeholder="0"
                    min="0"
                    max="50"
                    onChange={e => setNumOfChildren(e.target.value)}
                />
            </CardBody>
        </Card>
    );
}

export default ChildrenCard;
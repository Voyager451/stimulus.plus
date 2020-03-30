import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import {
    Card, CardBody, CardHeader, CardText, Input,
} from 'reactstrap';

const useState = () => {
    const state = useSelector(
        ({ filingYear, numOfChildren }) => ({
            filingYear,
            numOfChildren,
        }),
        shallowEqual,
    );

    const dispatch = useDispatch();

    const setNumOfChildren = (val) => dispatch({
        type: 'SET_NUM_OF_CHILDREN',
        payload: val,
    });

    return { state, setNumOfChildren };
};

const ChildrenCard = () => {

    const { state, setNumOfChildren } = useState();

    const maxChildren = 20;

    return (
        <Card className={ ' num-of-children-card' }>
            <CardHeader># of Children</CardHeader>
            <CardBody>
                <CardText>In <u>{state.filingYear}</u> filing.</CardText>
                <Input
                    type="number"
                    placeholder="0"
                    min="0"
                    max={ maxChildren }
                    onChange={ (e) => setNumOfChildren(e.target.value) }
                />
            </CardBody>
        </Card>
    );
};

export default ChildrenCard;

import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {numberWithCommas} from '../utils/format';

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(({amount}) => amount);
    const total = amounts.reduce((acc, el) => (acc+el), 0).toFixed(2)
    return (
        <React.Fragment>
            <h4>Your Balance</h4>
            <h1>${numberWithCommas(total)}</h1>
        </React.Fragment>
    )
}

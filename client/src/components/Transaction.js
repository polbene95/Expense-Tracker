import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'
import {numberWithCommas} from '../utils/format';
export const Transaction = ({ transaction }) => {
    const {
        text,
        amount,
        _id
    } = transaction;
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = amount < 0 ?'-' : '+';

    return (
        <li className={amount < 0 ? 'minus' : 'plus'}>
            {text} <span>{sign}${numberWithCommas(Math.abs(amount))}</span><button onClick={() => deleteTransaction(_id) } className="delete-btn">x</button>
        </li>
    )
}

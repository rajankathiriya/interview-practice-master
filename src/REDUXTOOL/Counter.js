import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add, Dec } from './Reducer';

const Counter = () => {

    const data = useSelector(y => y.sd)

    const dis = useDispatch()

    const INC = () => { dis(Add()) }
    const DEC = () => { dis(Dec()) }
    return (
        <div>
            {data}
            <button onClick={INC}>++</button>
            <button onClick={DEC}>--</button>
        </div>
    );
}

export default Counter;

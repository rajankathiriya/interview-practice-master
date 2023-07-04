import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD, DEL } from './Action';

const COUNTERTHUNK = () => {
    const data = useSelector(y => y.thunk)
    const dis = useDispatch()

    const Add = () => { dis(ADD()) }
    const Del = () => { dis(DEL()) }
    return (
        <div>
            {data}
            <button onClick={Add}>++</button>
            <button onClick={Del}>--</button>
        </div>
    );
}

export default COUNTERTHUNK;

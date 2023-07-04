import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEC, DIV, INC, MUL, RESET } from "./Action";

const COUNTER = () => {

    const data = useSelector(s => s.self)

    const dis = useDispatch()

    const Add = () => { dis(INC()) }
    const Del = () => { dis(DEC()) }
    const Mul = () => { dis(MUL()) }
    const Div = () => { dis(DIV()) }
    const Reset = () => { dis(RESET()) }
    return (
        <>
            {data}

            <button onClick={Add}>++</button>
            <button onClick={Del}>--</button>
            <button onClick={Mul}>**</button>
            <button onClick={Div}>//</button>
            <button onClick={Reset}>00</button>
        </>
    )
}

export default COUNTER

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { ADD2 } from './Action';

// const Counter1 = () => {
//     const data = useSelector(y => y.redux)
//     const dis = useDispatch()

//     const ADD = () => { dis(ADD2()) }
//     return (
//         <div>
//             {data}

//             <button onClick={ADD}>++</button>
//         </div>
//     );
// }

// export default Counter1;

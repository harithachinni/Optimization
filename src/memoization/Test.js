/******WE can come to know that memo is higher order function and it will re-render only for input change */

import React, { useMemo, useState } from "react";
function Test() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('')
    const expensiveCalc = (num) => {
        let i = 0;
        while (i < 100000000) {
            i++;
        }
        return num * num;
    }
    const memoizedValue = useMemo(() => expensiveCalc(count), [count])
    return (
        <div>
            <h3>{count}</h3>
            <p>Square : {memoizedValue}</p>
            <button onClick={() => setCount(count + 1)}>counter</button>
            <input type="text" onChange={(e) => setInput(e.target.value)}></input>
        </div>
    )
}
export default Test;
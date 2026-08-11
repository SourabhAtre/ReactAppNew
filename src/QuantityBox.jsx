import { useState } from "react";

function Count(){
    const [count, setCount] = useState(1)
    const [count1, setCount1] = useState(0)
    return(
        <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <span>{count}</span>
        <button onClick={() => count > 1 && setCount(count - 1)}>-</button>
        </>
    )
}
export default Count
import React, { useState } from "react";

function Counter(){  
  let [count,setCount] = useState(0)

  function increment() {
setCount(count+1)
  }

 let decrement = () =>
setCount(count-1)
 
    return(
        <>
        <div>
<h1>Counter : {count}</h1>
<button onClick={increment}>+</button>
<button onClick={decrement}>-</button>
</div>
</>
    )
}
export default Counter
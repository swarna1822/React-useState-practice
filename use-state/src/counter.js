import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="card d-flex justify-content-center">
      <div className="card-body">
        <center>
            <h1>Counter Application</h1>
        <h3 className="p-5">Count : {count}</h3>
        <button className="btn btn-primary m-1" onClick={()=>setCount(count+1)}>Increment</button>
        <button className="btn btn-danger m-1" onClick={()=>setCount(0)}>Reset</button>
        <button className="btn btn-success m-1" onClick={()=>setCount(count-1)}>Decrement</button>
        </center>
      </div>
    </div>
  );
};

export default Counter;

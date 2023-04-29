import { useState, useEffect } from "react";

function Timer()
{
    const [second,setTime] = useState(0);
    
    useEffect(() => {
        setTimeout(() => {
          setTime((second) => second + 1);
        }, 1000);
      });

    return <p>{second}</p>
}

export default Timer;
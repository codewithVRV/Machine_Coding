import { useState } from "react";
import "./style.css"

const Rating = () => {
    const arr = [1, 2, 3, 4, 5]
    const [count, setCount] = useState(0);
    const [tempCount, setTempCount] = useState(0);
    return (
        <div>
            <h1>Star Rating Component!</h1>
            {
                arr.map((item, idx) => {
                    return <span className={`${count >= idx+1  ? "clr" : ""} ${tempCount >= idx+1  ? "clr" : ""}`} key={idx}
                        onClick={() => setCount(idx+1)}
                        onMouseOver={() => setTempCount(idx+1)}
                        onMouseLeave={() => setTempCount(0)}
                    
                    >&#9733;</span>
                })
            }
            <h1 className="count">Selected Start : {count}</h1>
            <h1 className="count">Hover Start : {tempCount}</h1>
        </div>

    )
}

export default Rating;
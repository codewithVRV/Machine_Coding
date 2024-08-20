import { useState } from "react";
import "./App.css"
const Accordian = ({question, answer}) => {

    const [show, setShow] = useState(false)
    return (
        <div className="container">
            <h1>{question}  <span onClick={() => setShow(!show)}>{show ? '-' : '+'}</span></h1>

            {show ? <p>{answer}</p> : null}

        </div>
    )
}

export default Accordian;
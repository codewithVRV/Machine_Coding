import { useState } from "react";
import "./style.css"

const Progress = () => {
    const [progress, setProgress] = useState(0);


    function handleStartButton () {
        let id = setInterval(() => {
            setProgress((prevProgress) => {
                if(prevProgress >= 100) {
                    clearInterval(id)
                    return 100;
                }
                return  prevProgress + 10;
            })
        }, 500)
    }

    const getColor = () => {
        if(progress < 20) {
            return "red"
        }
        else if (progress < 40) {
            return "blue"
        }
        else if (progress < 60) {
            return "yellow"
        }
        else if (progress < 80) {
            return "green"
        }
        else {
            return "aqua"
        }
    }
    return (
        <div className="container">
            <div className="progress-bar" style={{width: `${(progress)}%`, backgroundColor: getColor()}}></div>
            <p>{progress}%</p>
            <button
                onClick={handleStartButton}
            >Start</button>
            <button
               onClick={() => setProgress(0)} 
            >Reset</button>
        </div>
    )
}

export default Progress;
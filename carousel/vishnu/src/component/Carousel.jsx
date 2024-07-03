import { useState } from "react"
import Data from "../data.json"
import "./style.css"
import { useEffect } from "react";
import { useRef } from "react";
const Carousel = () => {
    const [index, setIndex] = useState(0);
    const totalData = Data.length-1;
    let ref = useRef()
    const handleLeft = () => {
        if(index == 0) {
            setIndex(totalData)
        }
        else{
            setIndex(index-1)
        }
    }

    const handleRight = () => {

        setIndex((preIndex)=> {
            if(preIndex == totalData) {
                return 0
            }
            else {
                return preIndex + 1;
            }
        })
        // if(index == totalData) {
        //     setIndex(0)
        // }
        // else {
        //     setIndex(index+1)
        // }
    }


    useEffect(() => {
        ref.current = setInterval(handleRight, 1000)
        return () => clearInterval(ref.current)
    }, [])
    return (
        <div className="container"
        onMouseEnter={() => clearInterval(ref.current)}
        onMouseLeave={() => ref.current = setInterval(handleRight, 1000)}
        >
        {/* <h1>Carousel</h1> */}
        <div className="left"
            onClick={handleLeft}
        >{"<"}</div>
        <img src={Data[index].download_url} alt="random Image" />
        <div className="right"
            onClick={handleRight}
        >{">"}</div>
        </div>
    )
}

export default Carousel;
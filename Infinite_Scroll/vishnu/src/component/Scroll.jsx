import { useEffect, useState } from "react";



const Scroll = () => {
    const [count, setCount] = useState(50)
    const elements = []
    for(let i = 1; i <= count; i++) {
        elements.push(<div key={i}>{i}</div>)
    }

    const handleScroll = () => {
        if(window.innerHeight + window.scrollY > window.document.body.offsetHeight){
            setCount(count+50)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [count])
    return (
        <div>
            {elements}
        </div>
    )
}

export default Scroll;
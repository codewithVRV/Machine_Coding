import Accordian from "./Component/Accordian";


const App = () => {

    const data = [
        {
            question: "What is Frontend",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus accusamus adipisci. Laborum quod incidunt, minima inventore saepe quos Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nobis delectus quod optio, distinctio quidem iste natus sint quia unde. quisquam!"
        }, 
        {
            question: "What is Frontend",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus accusamus adipisci. Laborum quod incidunt, minima inventore saepe quos Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nobis delectus quod optio, distinctio quidem iste natus sint quia unde. quisquam!"
        }, 
        {
            question: "What is Frontend",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus accusamus adipisci. Laborum quod incidunt, minima inventore saepe quos Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nobis delectus quod optio, distinctio quidem iste natus sint quia unde. quisquam!"
        }, 
        {
            question: "What is Frontend",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus accusamus adipisci. Laborum quod incidunt, minima inventore saepe quos Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nobis delectus quod optio, distinctio quidem iste natus sint quia unde. quisquam!"
        }, 
        {
            question: "What is Frontend",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus accusamus adipisci. Laborum quod incidunt, minima inventore saepe quos Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nobis delectus quod optio, distinctio quidem iste natus sint quia unde. quisquam!"
        }, 
        {
            question: "What is Frontend",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus accusamus adipisci. Laborum quod incidunt, minima inventore saepe quos Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nobis delectus quod optio, distinctio quidem iste natus sint quia unde. quisquam!"
        }, 
        {
            question: "What is Frontend",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus accusamus adipisci. Laborum quod incidunt, minima inventore saepe quos Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nobis delectus quod optio, distinctio quidem iste natus sint quia unde. quisquam!"
        }, 

    ]

    return (
        <div>
            {
                data.map((element, idx) => {
                    return <Accordian key={idx} question={element.question} answer={element.answer} />
                })
            }
        </div>
    )
}

export default App;
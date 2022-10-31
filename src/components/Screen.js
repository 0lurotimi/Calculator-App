import { useContext } from "react"
import { CalcContext } from "../Context/CalcContext"
// import { Textfit } from "react-textfit";

const Screen = () => {
    const { calc } = useContext(CalcContext);
    // console.log(setCalc);
    return (
       <div className="screen" max = {70} mode = "single">{calc.num ? calc.num : calc.res}</div> 
    )
    
}

export default Screen
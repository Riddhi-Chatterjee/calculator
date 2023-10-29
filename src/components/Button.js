import { useContext } from "react"
import { CalcContext } from "../context/calcContext"

const getStyleName = btn => {
    const className = {
        '=': 'equals',
        'x': 'opt',
        '-': 'opt',
        '+': 'opt',
        '/': 'opt'
    }
    return className[btn]
}

const Button = ({ value }) => {
    const { setCalc } = useContext(CalcContext)
    console.log(setCalc);


    //User click: dot
    const dotClick = () => {
        
    }

    const handleBtnClick = () => {
        console.log(value);

        const results = {
            '.': dotClick
        }
        return results[value]()
    }

    return (
        <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
    )
}
export default Button
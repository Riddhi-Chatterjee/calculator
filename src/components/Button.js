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
    const { calc, setCalc } = useContext(CalcContext)
    console.log(setCalc);


    //User click: dot
    const dotClick = () => {
        setCalc({
            ...clac,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num //Add a decimal point only if it's not present already
        })
    }

    //User click: clear
    const clearClick = () => {
        setCalc({ sign: '', num: 0, res: 0 })
    }

    const handleBtnClick = () => {
        console.log(value);

        const results = {
            '.': dotClick,
            'C': clearClick
        }
        return results[value]()
    }

    return (
        <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
    )
}
export default Button
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
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num //Add a decimal point only if it's not present already
        })
    }

    //User click: clear
    const clearClick = () => {
        setCalc({ sign: '', num: 0, res: 0 })
    }

    //User click: number
    const handleClickNumber = () => {
        const numberString = value.toString()

        let numberValue;
        if(numberString === '0' && calc.num === 0) {
            numberValue = "0"
        } else {
            numberValue = Number(calc.num + numberString)
        }

        setCalc({
            ...calc,
            num: numberValue
        })
    }

    //User click: operation
    const optClick = () => {
        setCalc({
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }
    
    //User click: equals
    const equalsClick = () => {
        if(calc.res && calc.num) {
            const math = (a, b, sign) => {
                const result = {
                    '+': (a, b) => a + b,
                    '-': (a, b) => a - b,
                    '/': (a, b) => a / b,
                    'x': (a, b) => a * b
                }
                return result[sign](a, b);
            }
            setCalc({
                res: math(calc.res, calc.num, calc.sign),
                sign: '',
                num: 0
            })
        }
    }

    //User click: percentage
    const percentageClick = () => {
        setCalc({
            num: (calc.num/100),
            res: (calc.res/100),
            sign: ''
        })
    }

    //User click: invert sign
    const invertClick = () => {
        setCalc({
            num: calc.num ? calc.num * -1 : 0,
            res: calc.res ? calc.res * -1 : 0,
            sign: ''
        })
    }

    const handleBtnClick = () => {
        console.log(value);

        const results = {
            '.': dotClick,
            'C': clearClick,
            '/': optClick,
            'x': optClick,
            '-': optClick,
            '+': optClick,
            '=': equalsClick,
            '%': percentageClick,
            '+-': invertClick
        }
        if(results[value]) {
            return results[value]()
        } else {
            return handleClickNumber()
        }
    }

    return (
        <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
    )
}
export default Button
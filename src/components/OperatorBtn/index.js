import React, { useState } from 'react'
import './styles.css'

const OperatorBtn = (props) => {
    const [bgColor, setBgColor] = useState('')
    const handleClick = (e) => {
        setBgColor('#F38630');
        setTimeout(() => setBgColor(''), 70);
        if (e.target.value === 'AC') {
            props.lastBtnSetter('O');
            props.curNumberSetter('0')
            props.prevNumberSetter('0')
            props.operatorSetter('')
            return props.handleCalculation('0')
        } else if (e.target.value === '<X') {
            props.lastBtnSetter('O');
            props.handleCalculation(prevState => {
                if (prevState.split('').length < 2) {
                    return '0';
                }
                return prevState.substring(0, prevState.length - 1)
            })
        } else if (props.lastBtnGetter !== 'O') {
            if (e.target.value === '+') {
                props.lastBtnSetter('O');
                if (props.operatorGetter === "" || props.operatorGetter === "=") {
                    return props.handleCalculation(prevState => {
                        props.prevNumberSetter(prevState);
                        props.curNumberSetter(prevState);
                        props.operatorSetter('+');
                        return prevState;
                    })
                } else if (props.operatorGetter === '+') {
                    return props.handleCalculation(prevState => {
                        const newState = (parseFloat(props.curNumberGetter) + parseFloat(prevState)).toString();
                        props.prevNumberSetter(props.curNumberGetter)
                        props.curNumberSetter(newState)
                        props.operatorSetter('+');
                        return newState
                    })
                } else if (props.operatorGetter === '-') {
                    return props.handleCalculation(prevState => {
                        const newState = (parseFloat(props.curNumberGetter) - parseFloat(prevState)).toString();
                        props.prevNumberSetter(props.curNumberGetter)
                        props.curNumberSetter(newState)
                        props.operatorSetter('+');
                        return newState
                    })
                } else if (props.operatorGetter === 'x') {
                    return props.handleCalculation(prevState => {
                        const newState = (parseFloat(props.curNumberGetter) * parseFloat(prevState)).toString();
                        props.prevNumberSetter(props.curNumberGetter)
                        props.curNumberSetter(newState)
                        props.operatorSetter('+');
                        return newState
                    })
                } else if (props.operatorGetter === '/') {
                    return props.handleCalculation(prevState => {
                        const newState = (parseFloat(props.curNumberGetter) / parseFloat(prevState)).toString();
                        props.prevNumberSetter(props.curNumberGetter)
                        props.curNumberSetter(newState)
                        props.operatorSetter('+');
                        return newState
                    })
                }
            } else if (e.target.value === '-') {
                props.lastBtnSetter('O');
                if (props.operatorGetter === "" || props.operatorGetter === "=") {
                    return props.handleCalculation(prevState => {
                        props.prevNumberSetter(prevState);
                        props.curNumberSetter(prevState);
                        props.operatorSetter('-');
                        return prevState;
                    })
                } else if (props.operatorGetter === '+') {
                    return props.handleCalculation(prevState => {
                        const newState = (parseFloat(props.curNumberGetter) + parseFloat(prevState)).toString();
                        props.prevNumberSetter(props.curNumberGetter)
                        props.curNumberSetter(newState)
                        props.operatorSetter('-');
                        return newState
                    })
                } else if (props.operatorGetter === '-') {
                    return props.handleCalculation(prevState => {
                        const newState = (parseFloat(props.curNumberGetter) - parseFloat(prevState)).toString();
                        props.prevNumberSetter(props.curNumberGetter)
                        props.curNumberSetter(newState)
                        props.operatorSetter('-');
                        return newState
                    })
                } else if (props.operatorGetter === 'x') {
                    return props.handleCalculation(prevState => {
                        const newState = (parseFloat(props.curNumberGetter) * parseFloat(prevState)).toString();
                        props.prevNumberSetter(props.curNumberGetter)
                        props.curNumberSetter(newState)
                        props.operatorSetter('-');
                        return newState
                    })
                } else if (props.operatorGetter === '/') {
                    return props.handleCalculation(prevState => {
                        const newState = (parseFloat(props.curNumberGetter) / parseFloat(prevState)).toString();
                        props.prevNumberSetter(props.curNumberGetter)
                        props.curNumberSetter(newState)
                        props.operatorSetter('-');
                        return newState
                    })
                }
            } else if (e.target.value === 'x') {
                props.lastBtnSetter('O');
                if (props.operatorGetter === "" || props.operatorGetter === "=") {
                    return props.handleCalculation(prevState => {
                        props.prevNumberSetter(prevState);
                        props.curNumberSetter(prevState);
                        props.operatorSetter('x');
                        return prevState;
                    })
                } else if (props.operatorGetter === '+') {
                    return props.handleCalculation(prevState => {
                        const newState = (parseFloat(props.curNumberGetter) + parseFloat(prevState)).toString();
                        props.prevNumberSetter(props.curNumberGetter)
                        props.curNumberSetter(newState)
                        props.operatorSetter('x');
                        return newState
                    })
                } else if (props.operatorGetter === '-') {
                    return props.handleCalculation(prevState => {
                        const newState = (parseFloat(props.curNumberGetter) - parseFloat(prevState)).toString();
                        props.prevNumberSetter(props.curNumberGetter)
                        props.curNumberSetter(newState)
                        props.operatorSetter('x');
                        return newState
                    })
                } else if (props.operatorGetter === 'x') {
                    return props.handleCalculation(prevState => {
                        const newState = (parseFloat(props.curNumberGetter) * parseFloat(prevState)).toString();
                        props.prevNumberSetter(props.curNumberGetter)
                        props.curNumberSetter(newState)
                        props.operatorSetter('x');
                        return newState
                    })
                } else if (props.operatorGetter === '/') {
                    return props.handleCalculation(prevState => {
                        const newState = (parseFloat(props.curNumberGetter) / parseFloat(prevState)).toString();
                        props.prevNumberSetter(props.curNumberGetter)
                        props.curNumberSetter(newState)
                        props.operatorSetter('x');
                        return newState
                    })
                }
            } else if (e.target.value === '/') {
                props.lastBtnSetter('O');
                if (props.operatorGetter === "" || props.operatorGetter === "=") {
                    return props.handleCalculation(prevState => {
                        props.prevNumberSetter(prevState);
                        props.curNumberSetter(prevState);
                        props.operatorSetter('/');
                        return prevState;
                    })
                } else if (props.operatorGetter === '+') {
                    return props.handleCalculation(prevState => {
                        const newState = (parseFloat(props.curNumberGetter) + parseFloat(prevState)).toString();
                        props.prevNumberSetter(props.curNumberGetter)
                        props.curNumberSetter(newState)
                        props.operatorSetter('/');
                        return newState
                    })
                } else if (props.operatorGetter === '-') {
                    return props.handleCalculation(prevState => {
                        const newState = (parseFloat(props.curNumberGetter) - parseFloat(prevState)).toString();
                        props.prevNumberSetter(props.curNumberGetter)
                        props.curNumberSetter(newState)
                        props.operatorSetter('/');
                        return newState
                    })
                } else if (props.operatorGetter === 'x') {
                    return props.handleCalculation(prevState => {
                        const newState = (parseFloat(props.curNumberGetter) * parseFloat(prevState)).toString();
                        props.prevNumberSetter(props.curNumberGetter)
                        props.curNumberSetter(newState)
                        props.operatorSetter('/');
                        return newState
                    })
                } else if (props.operatorGetter === '/') {
                    return props.handleCalculation(prevState => {
                        const newState = (parseFloat(props.curNumberGetter) / parseFloat(prevState)).toString();
                        props.prevNumberSetter(props.curNumberGetter)
                        props.curNumberSetter(newState)
                        props.operatorSetter('/');
                        return newState
                    })
                }
            }
        } else {
            if (e.target.value === '+') {
                props.operatorSetter('+');
            } else if (e.target.value === '-') {
                props.operatorSetter('-');
            } else if (e.target.value === 'x') {
                props.operatorSetter('x');
            } else if (e.target.value === '/') {
                props.operatorSetter('/');
            }
        }
    }

    return (
        <button onClick={handleClick} style={{ backgroundColor: bgColor }} value={props.operator} className={props.cancel ? 'cancel_btn' : 'operator_btn'}>{props.operator}</button>
    )
}

export default OperatorBtn
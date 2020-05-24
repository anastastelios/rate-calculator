import React, { useState } from 'react'
import './styles.css'

const NumberBtn = (props) => {
    const [bgColor, setBgColor] = useState('')
    const handleClick = (e) => {
        setBgColor('#A7DBD8');
        setTimeout(() => setBgColor(''), 70);
        if (e.target.value === '=') {
            props.lastBtnSetter('O');
            if (props.operatorGetter === "") {
                return props.handleCalculation(prevState => {
                    props.prevNumberSetter(prevState);
                    props.curNumberSetter(prevState);
                    props.operatorSetter('=');
                    return prevState;
                })
            } else if (props.operatorGetter === '+') {
                return props.handleCalculation(prevState => {
                    const newState = (parseFloat(props.curNumberGetter) + parseFloat(prevState)).toString();
                    props.prevNumberSetter(props.curNumberGetter)
                    props.curNumberSetter(newState)
                    props.operatorSetter('=');
                    return newState
                })
            } else if (props.operatorGetter === '-') {
                return props.handleCalculation(prevState => {
                    const newState = (parseFloat(props.curNumberGetter) - parseFloat(prevState)).toString();
                    props.prevNumberSetter(props.curNumberGetter)
                    props.curNumberSetter(newState)
                    props.operatorSetter('=');
                    return newState
                })
            } else if (props.operatorGetter === 'x') {
                return props.handleCalculation(prevState => {
                    const newState = (parseFloat(props.curNumberGetter) * parseFloat(prevState)).toString();
                    props.prevNumberSetter(props.curNumberGetter)
                    props.curNumberSetter(newState)
                    props.operatorSetter('=');
                    return newState
                })
            } else if (props.operatorGetter === '/') {
                return props.handleCalculation(prevState => {
                    const newState = (parseFloat(props.curNumberGetter) / parseFloat(prevState)).toString();
                    props.prevNumberSetter(props.curNumberGetter)
                    props.curNumberSetter(newState)
                    props.operatorSetter('=');
                    return newState
                })
            } else if (props.operatorGetter === '=') {
                return props.handleCalculation(prevState => prevState);
            }
        } else {
            props.handleCalculation(prevState => {
                props.lastBtnSetter('N');
                if (props.operatorGetter === '') {
                    if (prevState === '0') {
                        return e.target.value;
                    } else if (prevState.split('').length > 17) {
                        return prevState;
                    } else if (e.target.value === '.') {
                        if (prevState.indexOf('.') < 0) {
                            return prevState + e.target.value;
                        } else {
                            return prevState;
                        }
                    } else {
                        return prevState + e.target.value;
                    }
                } else if (prevState === props.prevNumberGetter && props.prevNumberGetter !== props.curNumberGetter) {
                    return e.target.value;
                    // } else if (prevState === props.curNumberGetter) {
                    //     return prevState + e.target.value;
                } else if (props.lastBtnGetter === 'O') {
                    return e.target.value;
                } else {
                    return prevState + e.target.value;
                }
            })
        }
    }

    return (
        <button onClick={handleClick} style={{ backgroundColor: bgColor }} value={props.number} className='number_btn'>{props.number}</button>
    )
}

export default NumberBtn
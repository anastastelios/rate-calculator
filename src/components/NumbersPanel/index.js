import React from 'react'
import './styles.css'
import NumberBtn from '../NumberBtn'

const NumbersPanel = (props) => {
    return (
        <div className='numbers_panel_container'>
            <NumberBtn handleCalculation={props.changeCalculation} operatorGetter={props.operatorGetter} curNumberGetter={props.curNumberGetter} prevNumberGetter={props.prevNumberGetter} lastBtnGetter={props.lastBtnGetter} lastBtnSetter={props.lastBtnSetter} number='7' />
            <NumberBtn handleCalculation={props.changeCalculation} operatorGetter={props.operatorGetter} curNumberGetter={props.curNumberGetter} prevNumberGetter={props.prevNumberGetter} lastBtnGetter={props.lastBtnGetter} lastBtnSetter={props.lastBtnSetter} number='8' />
            <NumberBtn handleCalculation={props.changeCalculation} operatorGetter={props.operatorGetter} curNumberGetter={props.curNumberGetter} prevNumberGetter={props.prevNumberGetter} lastBtnGetter={props.lastBtnGetter} lastBtnSetter={props.lastBtnSetter} number='9' />
            <NumberBtn handleCalculation={props.changeCalculation} operatorGetter={props.operatorGetter} curNumberGetter={props.curNumberGetter} prevNumberGetter={props.prevNumberGetter} lastBtnGetter={props.lastBtnGetter} lastBtnSetter={props.lastBtnSetter} number='4' />
            <NumberBtn handleCalculation={props.changeCalculation} operatorGetter={props.operatorGetter} curNumberGetter={props.curNumberGetter} prevNumberGetter={props.prevNumberGetter} lastBtnGetter={props.lastBtnGetter} lastBtnSetter={props.lastBtnSetter} number='5' />
            <NumberBtn handleCalculation={props.changeCalculation} operatorGetter={props.operatorGetter} curNumberGetter={props.curNumberGetter} prevNumberGetter={props.prevNumberGetter} lastBtnGetter={props.lastBtnGetter} lastBtnSetter={props.lastBtnSetter} number='6' />
            <NumberBtn handleCalculation={props.changeCalculation} operatorGetter={props.operatorGetter} curNumberGetter={props.curNumberGetter} prevNumberGetter={props.prevNumberGetter} lastBtnGetter={props.lastBtnGetter} lastBtnSetter={props.lastBtnSetter} number='1' />
            <NumberBtn handleCalculation={props.changeCalculation} operatorGetter={props.operatorGetter} curNumberGetter={props.curNumberGetter} prevNumberGetter={props.prevNumberGetter} lastBtnGetter={props.lastBtnGetter} lastBtnSetter={props.lastBtnSetter} number='2' />
            <NumberBtn handleCalculation={props.changeCalculation} operatorGetter={props.operatorGetter} curNumberGetter={props.curNumberGetter} prevNumberGetter={props.prevNumberGetter} lastBtnGetter={props.lastBtnGetter} lastBtnSetter={props.lastBtnSetter} number='3' />
            <NumberBtn handleCalculation={props.changeCalculation} operatorGetter={props.operatorGetter} curNumberGetter={props.curNumberGetter} prevNumberGetter={props.prevNumberGetter} lastBtnGetter={props.lastBtnGetter} lastBtnSetter={props.lastBtnSetter} number='0' />
            <NumberBtn handleCalculation={props.changeCalculation} operatorGetter={props.operatorGetter} curNumberGetter={props.curNumberGetter} prevNumberGetter={props.prevNumberGetter} lastBtnGetter={props.lastBtnGetter} lastBtnSetter={props.lastBtnSetter} number='.' />
            <NumberBtn handleCalculation={props.changeCalculation} operatorGetter={props.operatorGetter} curNumberGetter={props.curNumberGetter} curNumberSetter={props.curNumberSetter} prevNumberGetter={props.prevNumberGetter} prevNumberSetter={props.prevNumberSetter} lastBtnGetter={props.lastBtnGetter} lastBtnSetter={props.lastBtnSetter} operatorSetter={props.operatorSetter} number='=' />
        </div>
    )
}

export default NumbersPanel
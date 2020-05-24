import React from 'react'
import './styles.css'
import OperatorBtn from '../OperatorBtn'
import InvertSign from '../InvertSign'

const OperatorsPanel = (props) => {
    return (
        <div className='operators_panel_container'>
            <InvertSign handleCalculation={props.changeCalculation} />
            <OperatorBtn handleCalculation={props.changeCalculation} curNumberSetter={props.curNumberSetter} prevNumberSetter={props.prevNumberSetter} operatorSetter={props.operatorSetter} lastBtnSetter={props.lastBtnSetter} lastBtnGetter={props.lastBtnGetter} cancel='true' operator='AC' />
            <OperatorBtn handleCalculation={props.changeCalculation} lastBtnSetter={props.lastBtnSetter} lastBtnGetter={props.lastBtnGetter} cancel='true' operator='<X' />
            <OperatorBtn handleCalculation={props.changeCalculation} prevNumberSetter={props.prevNumberSetter} prevNumberGetter={props.prevNumberGetter} operatorSetter={props.operatorSetter} operatorGetter={props.operatorGetter} curNumberSetter={props.curNumberSetter} curNumberGetter={props.curNumberGetter} lastBtnSetter={props.lastBtnSetter} lastBtnGetter={props.lastBtnGetter} operator='/' />
            <OperatorBtn handleCalculation={props.changeCalculation} prevNumberSetter={props.prevNumberSetter} prevNumberGetter={props.prevNumberGetter} operatorSetter={props.operatorSetter} operatorGetter={props.operatorGetter} curNumberSetter={props.curNumberSetter} curNumberGetter={props.curNumberGetter} lastBtnSetter={props.lastBtnSetter} lastBtnGetter={props.lastBtnGetter} operator='x' />
            <OperatorBtn handleCalculation={props.changeCalculation} prevNumberSetter={props.prevNumberSetter} prevNumberGetter={props.prevNumberGetter} operatorSetter={props.operatorSetter} operatorGetter={props.operatorGetter} curNumberSetter={props.curNumberSetter} curNumberGetter={props.curNumberGetter} lastBtnSetter={props.lastBtnSetter} lastBtnGetter={props.lastBtnGetter} operator='-' />
            <OperatorBtn handleCalculation={props.changeCalculation} prevNumberSetter={props.prevNumberSetter} prevNumberGetter={props.prevNumberGetter} operatorSetter={props.operatorSetter} operatorGetter={props.operatorGetter} curNumberSetter={props.curNumberSetter} curNumberGetter={props.curNumberGetter} lastBtnSetter={props.lastBtnSetter} lastBtnGetter={props.lastBtnGetter} operator='+' />
        </div>
    )
}

export default OperatorsPanel
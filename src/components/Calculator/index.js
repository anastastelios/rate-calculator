import React, { useState } from 'react'
import './styles.css'
import NumbersPanel from '../NumbersPanel'
import Title from '../Title'
import Screen from '../Screen'
import OperatorsPanel from '../OperatorsPanel'
import ConverterPanel from '../ConverterPanel'


const Calculator = () => {
    const setInRate = () => {
        fetch(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}`)
            .then(response => response.json())
            .then(data => {
                const rate = data.rates[`${exchangeCurrency}`]
                setRate(baseCurrency === exchangeCurrency ? 1 : rate)
                return rate
            })
    }

    const [calculation, setCalculation] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');
    const [curNumber, setCurNumber] = useState('');
    const [lastOperator, setLastOperator] = useState('');
    const [lastBtn, setLastBtn] = useState('');
    const [baseCurrency, setBaseCurrency] = useState('EUR');
    const [exchangeCurrency, setExchangeCurrency] = useState('USD');
    const [rate, setRate] = useState(setInRate());

    return (
        <div className='calculator_container'>
            <Title />
            <Screen show={calculation} />
            <ConverterPanel rateGetter={rate} rateSetter={setRate} changeCalculation={setCalculation} baseCurrencySetter={setBaseCurrency} baseCurrencyGetter={baseCurrency} exchangeCurrencySetter={setExchangeCurrency} exchangeCurrencyGetter={exchangeCurrency} />
            <div className='panels_container'>
                <NumbersPanel changeCalculation={setCalculation} operatorGetter={lastOperator} curNumberGetter={curNumber} curNumberSetter={setCurNumber} prevNumberGetter={prevNumber} prevNumberSetter={setPrevNumber} lastBtnGetter={lastBtn} lastBtnSetter={setLastBtn} operatorSetter={setLastOperator} />
                <OperatorsPanel changeCalculation={setCalculation} prevNumberSetter={setPrevNumber} prevNumberGetter={prevNumber} operatorSetter={setLastOperator} operatorGetter={lastOperator} curNumberSetter={setCurNumber} curNumberGetter={curNumber} lastBtnSetter={setLastBtn} lastBtnGetter={lastBtn} />
            </div>
        </div>
    )
}

export default Calculator
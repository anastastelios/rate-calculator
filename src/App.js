import React, { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {

  const setInRate = () => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}`)
      .then(response => response.json())
      .then(data => {
        const rate = data.rates[`${exchangeCurrency}`]
        setRate(rate)
        return rate
      })
  }

  const [calculation, setCalculation] = useState('0');
  const [lastOperator, setLastOperator] = useState('');
  const [lastBtn, setLastBtn] = useState('');

  const [prevNumber, setPrevNumber] = useState('0');
  const [curNumber, setCurNumber] = useState('');
  const [baseCurrency, setBaseCurrency] = useState('EUR');
  const [exchangeCurrency, setExchangeCurrency] = useState('USD');
  const [rate, setRate] = useState(setInRate());

  const operators = {
    '+': function (a, b) { return a + b },
    '-': function (a, b) { return a - b },
    'x': function (a, b) { return a * b },
    '/': function (a, b) { return a / b }
  }

  const handleOperator = (operator) => {
    setLastBtn('O');
    if (lastOperator === "" || lastOperator === "=") {
      return setCalculation(prevState => {
        setPrevNumber(prevState);
        setCurNumber(prevState);
        setLastOperator(operator);
        return prevState;
      })
    } else {
      return setCalculation(prevState => {
        const newState = (operators[lastOperator](parseFloat(curNumber), parseFloat(prevState))).toString();
        setPrevNumber(curNumber)
        setCurNumber(newState)
        setLastOperator(operator);
        return newState
      })
    }
  }

  const updateCalcFromKey = (e) => {
    console.log(e.keyCode);
    e.persist();
    setCalculation(prevState => {
      if (e.keyCode === 187 && e.shiftKey) {
        handleOperator('+')
        setLastOperator('+')
        setLastBtn('O');
        return prevState
      } else if (e.keyCode === 189) {
        handleOperator('-')
        setLastOperator('-')
        setLastBtn('O');
        return prevState
      } else if (e.keyCode === 56 && e.shiftKey) {
        handleOperator('x')
        setLastOperator('x')
        setLastBtn('O');
        return prevState
      } else if (e.keyCode === 191) {
        handleOperator('/')
        setLastOperator('/')
        setLastBtn('O');
        return prevState
      } else if (e.keyCode === 8) {
        setLastBtn('O');
        setCurNumber('0')
        setPrevNumber('0')
        setLastOperator('')
        return setCalculation('0')
      } else if (e.keyCode === 32) {
        if (lastOperator === "") {
          return setCalculation(prevState => {
            setPrevNumber(prevState);
            setCurNumber(prevState);
            setLastOperator('=');
            setLastBtn('O');
            return prevState;
          })
        } else if (lastOperator === '=') {
          setLastBtn('O');
          return setCalculation(prevState => prevState);
        } else {
          return setCalculation(prevState => {
            const newState = (operators[lastOperator](parseFloat(curNumber), parseFloat(prevState))).toString();
            setPrevNumber(curNumber)
            setCurNumber(newState)
            setLastOperator('=');
            setLastBtn('O');
            return newState
          })
        }
      } else if (prevState.split('').length < 16) {
        if (e.keyCode === 190) {
          if (prevState.indexOf('.') < 0) {
            return prevState + '.';
          } else {
            return prevState;
          }
        } else if (e.keyCode > 46 && e.keyCode < 58 && !e.shiftKey) {
          if (prevState === '0' || lastBtn === 'O') {
            setLastBtn('N');
            return (e.keyCode - 48).toString()
          } else {
            setLastBtn('N');
            return prevState + (e.keyCode - 48).toString()
          }
        } else {
          return prevState
        }
      } else {
        if (e.keyCode > 46 && e.keyCode < 58 && !e.shiftKey) {
          if (lastBtn === 'O') {
            setCalculation((e.keyCode - 48).toString());
            setLastBtn('N');
            return (e.keyCode - 48).toString()
          } else {
            setLastBtn('N');
            return prevState
          }
        } else {
          return prevState
        }
      }
    })
  }

  return (
    <div className="App" tabIndex="0" onKeyDown={updateCalcFromKey} >
      <Calculator calculation={calculation} setCalculation={setCalculation} lastBtn={lastBtn} setLastBtn={setLastBtn} lastOperator={lastOperator} setLastOperator={setLastOperator} prevNumber={prevNumber} setPrevNumber={setPrevNumber} curNumber={curNumber} setCurNumber={setCurNumber} baseCurrency={baseCurrency} setBaseCurrency={setBaseCurrency} exchangeCurrency={exchangeCurrency} setExchangeCurrency={setExchangeCurrency} rate={rate} setRate={setRate} />
    </div>
  );
}

export default App;

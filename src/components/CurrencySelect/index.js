import React, { useEffect, useState } from 'react'
import './styles.css'

const CurrencySelect = (props) => {
    const [currencies, setCurrencies] = useState([])
    useEffect(() => {
        fetch(`https://api.exchangeratesapi.io/latest`)
            .then(response => response.json())
            .then(data => {
                setCurrencies(Object.keys(data.rates))
            })
    }, [])

    const currencyChange = (e) => {
        if (props.type === 'base') {
            props.baseCurrencySetter(e.target.value);
            console.log(props.baseCurrencyGetter)
            fetch(`https://api.exchangeratesapi.io/latest?base=${props.baseCurrencyGetter}`)
                .then(response => response.json())
                .then(data => {
                    props.rateSetter(props.exchangeCurrencyGetter === '' ? 1 : data.rates[`${props.exchangeCurrencyGetter}`])
                })
        } else if (props.type === 'exchange') {
            props.exchangeCurrencySetter(e.target.value);
            fetch(`https://api.exchangeratesapi.io/latest?base=${props.baseCurrencyGetter}`)
                .then(response => response.json())
                .then(data => {
                    props.rateSetter(props.baseCurrencyGetter === '' ? 1 : data.rates[`${props.exchangeCurrencyGetter}`])
                })
        }

    }

    const options = currencies.map((currency, index) => <option key={index} value={currency}>{currency}</option>)
    const valueOfSelect = props.type === 'base' ? props.baseCurrencyGetter : props.exchangeCurrencyGetter
    return (
        <>
            <select value={valueOfSelect} onChange={currencyChange} >
                <option value=''>---</option>
                <option value='EUR'>EUR</option>
                {options}
            </select>
        </>
    )
}

export default CurrencySelect
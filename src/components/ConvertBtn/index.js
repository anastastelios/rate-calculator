import React from 'react'
import './styles.css'

const ConverterBtn = (props) => {
    const convertRate = () => {
        props.changeCalculation(prevState => (prevState * props.rateGetter).toString())
    }



    return (
        <button onClick={convertRate}>Convert</button>
    )
}

export default ConverterBtn
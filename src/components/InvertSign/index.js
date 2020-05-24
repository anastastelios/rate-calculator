import React from 'react'
import './styles.css'

const InvertSign = (props) => {
    const changeSign = () => {
        props.handleCalculation(prevState => {
            return (-prevState).toString()
        })
    }
    return (
        <button onClick={changeSign} className='invert_btn'>+/-</button>
    )
}

export default InvertSign
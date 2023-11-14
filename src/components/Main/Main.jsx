import { useState } from 'react';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

import './main.css'

const Main = () => {
    // const [number, setNumber] = useState(0);

    // const onPlusNumberHandler = () => {
    //     setNumber(number + 1)
    // }
    // const onMinusNumberHandler = () => {
    //     setNumber(number - 1)
    // }

    const [firstInput, setFirstInput ] = useState()
    const [secondInput, setSecondInput ] = useState()
    const [result, setResult] = useState(0);

    const onChangeFirstInputHandler = (value) => {
        setFirstInput(value)
    }
    const onChangeSecondInputHandler = (value) => {
        setSecondInput(value)
    }
    const onResetHandler = () => {
        setResult(0)
    }

    const onPlusHandler = () => {
        setResult(+firstInput + +secondInput)
    }
    const onMinusHandler = () => {
        setResult(-firstInput - -secondInput)
    }

    
    return (
        <div className='main'>
            {/* <button onClick={onPlusNumberHandler} type='button'>Plus one</button>
            <div>{number}</div>
            <button onClick={onMinusNumberHandler} type='button'>Minus one</button> */}
            <input type="number" onChange={(event) => onChangeFirstInputHandler(event.target.value)}/>
            <button onClick={onPlusHandler} type='button'>+</button>
            <button onClick={onResetHandler} type='button'>Reset</button>
            <button onClick={onMinusHandler} type='button'>-</button>
            <input type="number" onChange={(event) => onChangeSecondInputHandler(event.target.value)}/>
            <div>{ result }</div>

            <div className='form'>
                <RegistrationForm/>   
            </div>
                
        </div>

    )
    

}

export default Main;
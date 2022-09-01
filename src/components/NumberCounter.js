import React, { useState } from 'react'
import styled from 'styled-components';

const NumberCounter = () => {
    const [counter, setCounter] = useState(0);
    const Button = styled.button`
    margin:0.5em;
    padding:0.7em;
    outline:none;
    cursor:pointer;
    border-radius:5px;
    border:none;
    `
    const IncrementCounter= () =>{
        setCounter(counter  +1)
    }
    const DecrementCounter = () =>{
        setCounter(counter-1)
    }
  return (
    <>
    <h1> {counter} </h1>
    <Button onClick={DecrementCounter}>Subtract</Button>
    <Button onClick={IncrementCounter}>Add</Button>
    </>
  )
}

export default NumberCounter
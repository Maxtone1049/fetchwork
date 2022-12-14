import './App.css';
import styled from 'styled-components';
// import NumberCounter from './components/NumberCounter';
import React, { useEffect, useState } from 'react';
import Card from './components/Card';
const DoneStyle= styled.div `
padding:3em;
h2{
  text-align:center;
}

`
function App() {
  // useEffect(() => {
  //   alert("Hello Maxwell")
  
  // }, [])

  const [results, setResults] = useState([])
  useEffect(()=>{
    fetchPost().then(response=>setResults(response))
  })
  const fetchPost= async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then (response => response.json())
    // console.log(response)
    return response
  }
  // fetchPost()
  
  return (
    <DoneStyle>
      <h2>Post from Placeholder</h2>
  <Card results= {results}/>
    </DoneStyle>
  );
}

export default App;

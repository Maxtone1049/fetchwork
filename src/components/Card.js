import React from 'react'
import styled from 'styled-components'
const CardContainer = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
`
const CardBox = styled.div`
width:200px;
height:200px;
border-radius:25px;
text-align:center;
margin:1em;
padding:1em;
background: yellow;
color:black;

p{
    font-size:0.7em
}
`
const Card = ({results}) => {
  return (
    <CardContainer>
        {
            results && results.map(result =>(
        <CardBox>
        <h2>{result.id}</h2>
        <p>{result.title}</p>
        <p>{result.body}</p>
        </CardBox>
        ))
        }
    </CardContainer>
  )
}

export default Card
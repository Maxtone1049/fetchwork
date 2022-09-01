import React, { Component } from 'react'
import Button from './Button'

export default class ClassComponents extends Component {
  render(){
    return(
        <div>
            <h2>Class Section</h2>
            <Button props= {"Welcome"}/>
        </div>
    )
  }
}

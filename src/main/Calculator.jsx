import React, { Component } from 'react'
import Button from '../components/Button'
import './Calculator.css'
import Display from '../components/display'

 
export default class Calculator extends Component{

    constructor(props){
        super(props)
        this.ClearMemory = this.ClearMemory.bind(this)
        this.SetOperation = this.SetOperation.bind(this)
        this.AddDigit = this.AddDigit.bind(this)

    }
    ClearMemory(){
        console.log('limpado')
    }

    SetOperation(operation){
        console.log(operation)

    }
    AddDigit(n){
        console.log(n)
    }

    render(){
        // const AddDigit = n => this.AddDigit(n)
        // const SetOperation = op => this.SetOperation(op)
        return(
            <div className="calculator">
                <Display value='100'/>
                <Button label="AC" click={this.ClearMemory}/>
                <Button label="/" click={this.SetOperation}/>
                <Button label="7"click={this.AddDigit}/>
                <Button label="8"click={this.AddDigit}/>
                <Button label="9"click={this.AddDigit}/>
                <Button label="*" click={this.SetOperation}/>
                <Button label="5"click={this.AddDigit}/>
                <Button label="5"click={this.AddDigit}/>
                <Button label="6"click={this.AddDigit}/>
                <Button label="-"click={this.SetOperation}/>
                <Button label="1"click={this.AddDigit}/>
                <Button label="2"click={this.AddDigit}/>
                <Button label="3"click={this.AddDigit}/>
                <Button label="+"click={this.SetOperation}/>
                <Button label="0"click={this.AddDigit}/>
                <Button label="."click={this.AddDigit}/>
                <Button label="="click={this.SetOperation}/>
                
                
            </div>
        )
    }
}
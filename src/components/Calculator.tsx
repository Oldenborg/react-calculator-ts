import React from 'react';
import Button from './Button';

export interface CalculatorState {
  input: string;
  result: string;
};

interface CalculatorProps {}

class Calculator extends React.Component<CalculatorProps, CalculatorState> {

  constructor(props: CalculatorProps) {
    super(props);
    this.state = {
      input: "",
      result: "",
    }
  }

  addInput(value: string): void {
    this.setState({
      input: `${this.state.input}${value}`,
    }); 
  }

  calculateResult(): void {
    const result: string = String(eval(this.state.input));
    this.setState({
      result: result
    })
  }

  clearLast(): void {
    const input = this.state.input.slice(0,-1);
    this.setState({
      input: input
    })
  }

  clearAll(): void {
    this.setState({
      input: "",
      result: "",
    })
  }

  render() {
    return (
      <div className="Calculator">
        <div className="Input">{this.state.input}</div>
        <div className="Result">{this.state.result}</div>
        <div className="Buttons">
          <Button large onClick={() => this.clearAll()}>ac</Button>
          <Button large onClick={() => this.clearLast()}>c</Button>
          <Button onClick={() => this.addInput("*")}>x</Button>
          <Button onClick={() => this.addInput("/")}>÷</Button>
          <Button onClick={() => this.addInput("-")}>-</Button>
          <Button onClick={() => this.addInput("+")}>+</Button>
          <Button onClick={() => this.addInput("9")}>9</Button>
          <Button onClick={() => this.addInput("8")}>8</Button>
          <Button onClick={() => this.addInput("7")}>7</Button>
          <Button onClick={() => this.addInput("6")}>6</Button>
          <Button onClick={() => this.addInput("5")}>5</Button>
          <Button onClick={() => this.addInput("4")}>4</Button>
          <Button onClick={() => this.addInput("3")}>3</Button>
          <Button onClick={() => this.addInput("2")}>2</Button>
          <Button onClick={() => this.addInput("1")}>1</Button>
          <Button onClick={() => this.addInput("0")}>0</Button>
          <Button large onClick={() => this.calculateResult()}>=</Button>
        </div>
      </div>
    )
  }
};

export default Calculator;

import React from 'react';
import './App.css';
import Button from './components/Button';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="Input"></div>
      <div className="Result"></div>
      <div className="Buttons">
        <Button large>ac</Button>
        <Button large>c</Button>
        <Button>*</Button>
        <Button>/</Button>
        <Button>-</Button>
        <Button>+</Button>
        <Button>9</Button>
        <Button>8</Button>
        <Button>7</Button>
        <Button>6</Button>
        <Button>5</Button>
        <Button>4</Button>
        <Button>3</Button>
        <Button>2</Button>
        <Button>1</Button>
        <Button>0</Button>
        <Button large>=</Button>
      </div>
    </div>
  );
}

export default App;

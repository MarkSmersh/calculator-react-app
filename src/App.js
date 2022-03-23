import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Display from './components/Display';


function App() {
  const [prevNumber, setPrevNumber] = useState("0")
  const [number, setNumber] = useState("0")
  const [operator, setOperator] = useState(null)

  const Get = () => {
    var result
    switch (operator) {
      case '+': result = parseInt(prevNumber, 10) + parseInt(number, 10); break
      case '-': result = prevNumber - number; break
      case '*': result = prevNumber * number; break
      case '/': result = prevNumber / number; break
      default: break
    }
    result = result.toString()
    if (result.toString().length > 13) result = parseInt(result.toString().slice(0, 14), 10)
    setNumber(result)
    setPrevNumber("0")
    setOperator(null)
    return result
  }

  const Calcalute = (type, value) => {
    switch (type) {
      case 'Num': {
        if (value === 'null' || number === '0' || number === 'null') setNumber (value)
        else if (number.length > 13) return
        else if (number.split('').includes('.') && value === '.') return
        else {setNumber (`${number + value}`)}
        break
      }
      case 'Calc': {
        if (operator !== null) var result = Get()
        if (result) setPrevNumber (result)
        else setPrevNumber (number)
        setOperator(value)
        setNumber("0")
        break
      }
      case 'Clear': {
        if (value === 'ce') setNumber("0")
        else if (value === 'c') { 
          setNumber("0")
          setPrevNumber("0")
          setOperator(null)
        } 
        break
      }
      case 'Get': {
        Get()
        break
      }
      default: break
    }
  }

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'null', '.']
  const actions = ['+', '-', '*', '/']

  return (
    <div className="App">
      <div className='Calculator'>
        <Display number={number} prevNumber={prevNumber}/>
        <div className='Button-Container'>
          <div className='Numeric-Buttons'>
            {numbers.map((value) => { return <Button key={value} type={"Num"} value={value} onClick={Calcalute}/>})}
          </div>
          <div className='Actions-Buttons'>
            <Button type={"Clear"} value={'ce'} onClick={Calcalute}/>
            <Button type={"Clear"} value={'c'} onClick={Calcalute}/>
            {actions.map((value) => { return <Button key={value} type={"Calc"} value={value} onClick={Calcalute}/>})}
            <Button type={"Get"} value={'='} onClick={Calcalute}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import Main from './components/Main';

function App() {
  const [value, setValue] = useState("")
  const [screenVal, setScreenVal] = useState("")
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const trigoRatios = ['s', 'c', 't']
 
  function handleChange(e) {
    // setValue(e.target.value)
    value = e.target.value
  }

  function handleClick(num) {
    console.log(num)
    setScreenVal(screenVal + num.toString())


  }
  function calculate() {
    if(trigoRatios[0]==screenVal[0]){
      calculateSin(screenVal)
    }if(trigoRatios[1]==screenVal[0]){
      calculateCos(screenVal)
    }if(trigoRatios[2]==screenVal[0]){
      calculateTan(screenVal)
    }else{
      setScreenVal(
        eval(screenVal)
      )
    }
  }

  function percentage() {
    setScreenVal(
      `(${screenVal}/100)*`
    )
  }

  function clearScreen() {
    setScreenVal("")
  }

  const calculateSin = (ratio)=>{
      if(ratio[0]=='s'){
        const splitted = ratio.split("(")[1]
        const deg = splitted.slice(0, splitted.length-1)
        setScreenVal(Number(eval(`Math.sin(${deg}*(Math.PI/180))`)).toFixed(2))
      }
      else{
        console.log(ratio)
      }
  }


  const calculateCos = (ratio)=>{
    if(ratio[0]=='c'){
      const splitted = ratio.split("(")[1]
      const deg = splitted.slice(0, splitted.length-1)
      setScreenVal(Number(eval(`Math.cos(${deg}*(Math.PI/180))`)).toFixed(2))
    }
    else{
      console.log(ratio)
    }
  }


  const calculateTan = (ratio)=>{
    if(ratio[0]=='t'){
      const splitted = ratio.split("(")[1]
      const deg = splitted.slice(0, splitted.length-1)
      setScreenVal(Number(eval(`Math.tan(${deg}*(Math.PI/180))`)).toFixed(2))
    }
    else{
      console.log(ratio)
    }
}



function mod(){
  setScreenVal(Math.abs(screenVal))
}



  function backspace() {
    let newVal = screenVal.substring(0, screenVal.length - 1)
    setScreenVal(newVal)
  }

  function fact() {
    var total = 1
    for (let i = parseInt(screenVal); i > 0; i--) {
      total *= i
    }
    setScreenVal(total.toString())
  }

  return (
    <>
      <div className="App">
        <div className='calc-body'>
          <input className="screen" type="text" value={screenVal} onChange={handleChange} />

          <Main myVal={value} />
          <div className="buttons">
            {nums.map((num) => {
              return (<button key={num} onClick={() => handleClick(num)}>{num}</button>)
            })}

            <button onClick={() => handleClick("+")}>+</button>
            <button onClick={() => handleClick("0")}>0</button>
            <button onClick={() => handleClick("-")}>-</button>
            <button onClick={() => handleClick(".")}>.</button>
            <button onClick={() => handleClick("*")}>x</button>
            <button onClick={() => handleClick("/")}>/</button>
            <button onClick={() => handleClick("**")}>X<sup>n</sup></button>
            <button onClick={() => { percentage() }}>%</button>
            <button onClick={() => handleClick("(")}>(</button>
            <button onClick={() => handleClick(")")}>)</button>
            <button onClick={() => { fact() }}>!</button>
            <button onClick={()=>{mod()}}>|x|</button>
            <button onClick={() => { backspace() }}>del</button>
            <button onClick={() => { clearScreen() }}>C</button>
            <button onClick={()=>{handleClick("sin")}}>sin</button>
            <button onClick={()=>{handleClick("cos")}}>cos</button>
            <button onClick={()=>{handleClick("tan")}}>tan</button>
            <button onClick={() => calculate()}>=</button>
          </div>
        </div>

      </div>

    </>
  );
}

export default App;
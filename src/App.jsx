import { useState } from 'react'
import './App.css'
import Card from "./component/card/Card"
import Context from './component/Context';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <Context.Provider value={{count,setCount}}>
      <h1>{count}</h1>
      <div className="app-container">
       <Card name="Balamurugan" email="bala@example.com" btnName="Btn1" />
       <Card name="Arun Kumar" email="arun@example.com" btnName="Btn2" />
       <Card name="Diwakar" email="diwkk@example.com" btnName="Btn3" />
      </div>
    </Context.Provider>
    </>
  )
}

export default App
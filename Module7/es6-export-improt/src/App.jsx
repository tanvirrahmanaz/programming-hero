import { useState } from 'react'
import './App.css'
import { add, diff, mult } from '../utilites/math/math'

function App() {
  const [count, setCount] = useState(0)

  const sum = add( 2, 4);
  const subs = diff( 3,2);
  const mul = mult(2,2)

  // console.log(sum, subs, mul)

  const bottles = [
    {id:1, name:'Pink Nike bottle' , price:250, color:'pink'},
    {id:2, name:'Pink Nike bottle' , price:250, color:'pink'},
    {id:3, name:'Pink Nike bottle' , price:250, color:'pink'},
    {id:4, name:'Pink Nike bottle' , price:250, color:'pink'},
  ]

  return (
    <>
     <h1>Hello World</h1>
    </>
  )
}

export default App

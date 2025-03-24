import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello vai brother</h1>
      <Person></Person>
      <Person></Person>
      <Developer  name='tanvir' tech = "python"></Developer>
      <Developer  name='rajib' tech = "java"></Developer>
    </>
  )
}

function Person(){
  return(
    <div className='person'>
      <h1>i am person</h1>
      <p>You are a gay</p>
    </div>
  )
}

function Developer(props){
  

  return(
    <div style={{
      border: '2px solid red',
      borderRadius: '20px'
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}


export default App

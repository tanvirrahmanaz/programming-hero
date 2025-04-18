import { Suspense, use, useState } from 'react'
import './App.css'
import { add, diff, mult } from '../utilites/math/math'
import Bottles from './components/bottles/Bottles'


const bottlesPromise = fetch('bottles.json').then(res => res.json())

function App() {
  
  return (
    <>
    <h1>Hello World :</h1>
    <Suspense>
      <Bottles bottlesPromise={bottlesPromise}></Bottles>
    </Suspense>
    </>
  )
}
export default App

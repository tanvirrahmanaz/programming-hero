import { Suspense, use, useState } from 'react'
import './App.css'
import { add, diff, mult } from '../utilites/math/math'
import Bottles from './components/bottles/Bottles'


const bottlesPromise = fetch('bottles.json').then(res => res.json())

function App() {
  
  return (
    <>
     <h1>Hello World :</h1>
     <Suspense fallback={<h3>Bottles are loading</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
     </Suspense>
    </>
  )
}
export default App


import { Suspense } from 'react';
import Countries from '../component/countries/Countries'
import './App.css'

const countriespromise = fetch("https://restcountries.com/v3.1/all").then(rest => rest.json());

function App() {
  

  return (
    <>
      
      <Suspense fallback={<h3>Nadir vai going........</h3>}> 
        <Countries countriespromise={countriespromise}></Countries>
      </Suspense>
      
    </>
  )
}

export default App

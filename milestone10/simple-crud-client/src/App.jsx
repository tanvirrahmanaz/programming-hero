import './App.css'
import User from './components/User'

const userPromise = fetch('http://localhost:5000/users').then(res => res.json())

function App() {


  return (
    <>
      <p>simple crud operation</p>
      <User userPromise = {userPromise}></User>
    </>
  )
}

export default App

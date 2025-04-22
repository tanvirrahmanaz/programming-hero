import './App.css'
import ControlledFeild from './components/ControlledField/ControlledFeild'
import FormAction from './components/FormAction/FormAction'
import Simpleform from './components/Simpleform/Simpleform'

function App() {
  

  return (
    <>
      <h1>
        explore react form
      </h1>
     
      <Simpleform></Simpleform>


      <h1>Form action start</h1>
      <FormAction></FormAction>

      <h2>
        Controlled field start
      </h2>
      <ControlledFeild></ControlledFeild>
    </>
  )
}

export default App

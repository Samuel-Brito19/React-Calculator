import { useReducer } from "react"
import { DigitButton } from "./Components/Buttons/DigitButton"

export const ACTIONS = {
  DELETE: 'delete',
  ADD_DIGIT: 'add_digit',
  CHOOSE_OPERATIOR: 'choose_operatior',
  CLEAR: 'clear',
  EVALUATE: 'evaluate'
}

const myReducer = (state, ACTIONS) => {
  switch (ACTIONS.type) {
    case 'ADD_DIGIT':
      return {

      }
  }
}

function App() {

  const [{ currentOperatior, previousOperator, operatorDigit }, dispatch] = useReducer(myReducer, {})

  return (
    <div className="calculator-grid">

      <div className="painel">
        <div className="previous-operator"> {currentOperatior}, {operatorDigit} </div>
        <div className="current-operator"> {previousOperator} </div>
      </div>

      <button className="span-2" >DEL</button>
      <button>1</button>
      <button>1</button>
      <button>1</button>
      <button>1</button>
      <button>1</button>
      <button>1</button>
      <button>1</button>
      <button>1</button>
      <button>1</button>
      <button>1</button>
      <button className="span-2">=</button>

    </div>
  )
}

export default App

import { useReducer } from "react"
import { DigitButton } from "./Components/Buttons/DigitButton"
import { OperationButton } from "./Components/Buttons/OperationButton"
// eslint-disable-next-line react-refresh/only-export-components
export const ACTIONS = {
  DELETE: 'delete',
  ADD_DIGIT: 'add_digit',
  CHOOSE_OPERATION: 'choose_operatior',
  CLEAR: 'clear',
  EVALUATE: 'evaluate'
}

const myReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "0" && state.currentOperatior === "0") {
        return state
      }
      if (payload.digit === "." && state.currentOperatior.includes('.')) {
        return state
      }
      return {
        ...state,
        currentOperatior: `${state.currentOperatior || ""} ${payload.digit}`
      }
  }
}

function App() {

  const [{ currentOperatior, previousOperator, operatorDigit }, dispatch] = useReducer(myReducer, {})

  return (
    <div className="calculator-grid">

      <div className="painel">
        <div className="previous-operator"> {previousOperator} {operatorDigit}</div>
        <div className="current-operator"> {currentOperatior} </div>
      </div>


      <button className="span-2">AC</button>
      <button>DEL</button>
      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className="span-2">=</button>

    </div>
  )
}

export default App

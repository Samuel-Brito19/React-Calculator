import { useReducer } from "react"
import { DigitButton } from "./Components/Buttons/DigitButton"
import { OperationButton } from "./Components/Buttons/OperationButton"

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
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state
      }
      if (payload.digit === "." && state.currentOperand.includes('.')) {
        return state
      }
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false
        }
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""} ${payload.digit}`,
      }


    case ACTIONS.CLEAR:
      return {}

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null

        }
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation
        }

      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null
      }

    case ACTIONS.EVALUATE:
      if (state.operation == null || state.currentOperand == null || state.previousOperand == null) {
        return state
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state)
      }

    case ACTIONS.DELETE:
      if (state.overwrite) return {
        ...state,
        overwrite: false,
        currentOperand: null
      }
      if (state.currentOperand == null) return state
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null }
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      }
  }
}


const evaluate = ({ currentOperand, previousOperand, operation }) => {

  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if (isNaN(prev) || isNaN(current)) { return "" }
  let computation = ""

  switch (operation) {
    case "+":
      computation = prev + current
      break

    case "-":
      computation = prev - current
      break

    case "*":
      computation = prev * current
      break

    case "÷":
      computation = prev / current
      break
  }

  return computation.toString()
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
})
function formatOperand(operand) {
  if (operand == null) return
  const [integer, decimal] = operand.split(".")
  if (decimal == null) return INTEGER_FORMATTER.format(integer)
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

function App() {

  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(myReducer, {})

  return (
    <div className="calculator-grid">

      <div className="painel">
        <div className="previous-operator">  {formatOperand(previousOperand)} {operation}</div>
        <div className="current-operator"> {formatOperand(currentOperand)} </div>
      </div>


      <button className="span-2" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE })} >DEL</button>
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
      <button className="span-2" onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>=</button>

    </div>
  )
}

export default App

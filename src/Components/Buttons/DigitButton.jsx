import { ACTIONS } from "../../App"

export const DigitButton = (dispatch, digit) => {
    return (
        <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT })}> {digit} </button>
    )
}
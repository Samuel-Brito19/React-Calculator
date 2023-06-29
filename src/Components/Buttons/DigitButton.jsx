import { ACTIONS } from "../../App"
import P from 'prop-types'


export const DigitButton = ({ dispatch, digit }) => {
    return (
        <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}> {digit} </button>
    )
}

DigitButton.propTypes = {
    dispatch: P.func.isRequired,
    digit: P.string.isRequired
}
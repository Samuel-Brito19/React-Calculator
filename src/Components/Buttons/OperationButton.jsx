import { ACTIONS } from "../../App"
import P from 'prop-types'


export const OperationButton = ({ dispatch, operation }) => {
    return (
        <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>
            {operation}
        </button>
    )
}

OperationButton.propTypes = {
    dispatch: P.func.isRequired,
    operation: P.string.isRequired
}
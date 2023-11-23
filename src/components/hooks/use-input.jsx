import { useReducer } from "react";

const initialInputState = {
    value: "",
    isTouched: false,
}

const inputStateReducer = (state, action) => {
    if (action.type === "INPUT") {
        return {
            value: action.value,
            isTouched: state.isTouched
        }
    }

    if (action.type === "BLUR") {
        return {
            value: state.value,
            isTouched: true,
        }    
    }

    if (action.type === "RESET") {
        return {
            value: "",
            isTouched: false,
        }
    }
    return state
}

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(
        inputStateReducer,
        initialInputState
    )

    const valueIsValid = validateValue(inputState.value)
    const valueHasError  = !valueIsValid && inputState.isTouched

    const valueChangeHandler = (event) => {
        dispatch({ type: "INPUT", value: event.target.value })
    }

    const inputBlurHandler = (event) => {
        dispatch({type: "BLUR"})
    }

    const reset = () => {
        dispatch({ type: "RESET" })
    }

    return {
        value: inputState.value,
        isValid: valueIsValid,
        valueHasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    }
}

export default useInput;
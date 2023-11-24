The useReducer is a hook that allows you to handle data in different forms without having to write functions for each. It enables you store a value and perform different functions on that same value. The useReducer takes in the state and action parameter.
The returned value is an object
Think of the useReducer hook as a way of managing 

To use the useReducer, the first step you have to take is to import the useReducer hook from react:

import { useReducer } from "react"

Here, we will be managing different states for a user's essay texts

Declare the reducer value at the top level above the component

we want to chack if the essay text is valid, using the value

the action parameter sets the value while the state parameter stores the value. hence, the state contains the stored value.

const essayReducer = (state, action) => {
    if (action.type === "TEXT_INPUT") {
        return {
            value: action.value, 
            isValid: action.value.trim().length > 15
        }
    }

    if (action.type === "INPUT_BLUR") {
        return {
            value: state.value,
            isValid: state.value.trim().length > 15
        }
    }
    return {
        value: "",
        isValid: false
    }
}

to declare the value in the component, we have to use the array destructuring method to handle the state and the action. we can declare the state as another variable

const [essayValue, dispatchEssay] = useReducer(essayReducer, {
    value: "",
    isValid: null,
    })
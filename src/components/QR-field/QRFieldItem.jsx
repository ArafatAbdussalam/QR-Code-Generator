import { Fragment, useState, useReducer } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Button/Input/Input";
import axios from "axios"



const QRFieldItem = () => {

    const [generate, setGenerate] = useState(
        {...data}
    )

    const handleInputChange = (event) => {
        setGenerate({...generate, [event.target.name]: event.target.value})
    }


    const generateCodeHandler = (event) => {
        event.preventDefault()
        axios.post("api", {post})
        .then(response => {})
        .catch(error)
        
    }

    

    return (
        <Fragment>
            <form onSubmit={generateCodeHandler}>
                // get the value of the input from a fetch api
                <Input onChange={handleInputChange} />

                <Button type="submit">Generate</Button>
            </form>
        </Fragment>
    )
}

export default QRFieldItem;
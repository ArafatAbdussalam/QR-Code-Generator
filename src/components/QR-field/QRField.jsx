
import QRFieldData from "./QRFieldData"
import Button from "../UI/Button/Button"

const QRField = (props) => {

    // const showFieldHandler = () => {

    // }

    const data =  QRFieldData.map( 
        (item) => {
        return (
            <Button 
                type="button"
                key = {item.id}
                children = {item.text}
                // onClick = {showFieldHandler}
            />
        )
        }
    )



    return (
        <div>
            {data}
        </div>
    )
}

export default QRField;
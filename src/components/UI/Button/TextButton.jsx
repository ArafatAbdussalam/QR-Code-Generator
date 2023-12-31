import "./TextButton.css"

const TextButton = (props) => {

    const {type, className, onClick, children} = props

    const buttonType = "button" || type
    
    const classes = ["text-button", className].join(" ")

    return (
        <button type={buttonType} className={classes} onClick={onClick}>{children}</button>
    )
}

export default TextButton;
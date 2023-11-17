import "./Button.css"

const Button = (props) => {

    const {type, className, onClick, children} = props

    const buttonType = "button" || type
    
    const classes = ["text-button", className].join(" ")

    return (
        <button type={buttonType} className={classes} onClick={onClick}>{children}</button>
    )
}

export default Button;
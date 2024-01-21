import { Link } from "react-router-dom";

import "./NavBar.css"

import useAuth from "../../hooks/useAuth";

import TextButton from "../../UI/Button/TextButton/TextButton";


const NavBar = () => {

    const {auth} = useAuth()

    return (
        <>
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-item logo-text" aria-label="qr code logo"><span id="bubble"></span><span id="qr-text">QR</span><span id="code-text">Code</span></li>

                    <div className="nav-item">
                        {!auth && (
                            <>
                                <TextButton tabIndex="-1000" className="nav-button"><Link tabIndex="3" to="/login">Log in</Link></TextButton>
                                <TextButton tabIndex="-1000" className="nav-button"><Link tabIndex="4" to="/signup">Sign up</Link></TextButton>
                            </>
                            )
                        } 

                        {auth && (
                            <TextButton tabIndex="-1000" className="nav-button"><Link tabIndex="5" to="/logout">Log out</Link></TextButton>
                            )
                        }
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;


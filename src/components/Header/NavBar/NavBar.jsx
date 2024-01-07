
import { Link } from "react-router-dom";

import "./NavBar.css"

import useAuth from "../../hooks/useAuth";

import Button from "../../UI/Button/TextButton";



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
                                <Button className="nav-button"><Link to="/login">Log in</Link></Button>
                                <Button className="nav-button"><Link to="/signup">Sign up</Link></Button>
                            </>
                            )
                        } 

                        {auth&& (
                            <Button className="nav-button"><Link to="/logout">Log out</Link></Button>
                            )
                        }
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;


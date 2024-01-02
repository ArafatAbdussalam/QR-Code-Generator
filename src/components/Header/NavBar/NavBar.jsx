import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css"

import AuthContext from "../../store/auth-context";

import Button from "../../UI/Button/TextButton";



const NavBar = () => {

    const authContext = useContext(AuthContext)

    return (
        <Fragment>
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-item logo-text"><span id="bubble"></span><span id="qr-text">QR</span><span id="code-text">Code</span></li>

                    <div className="nav-item">
                        {!authContext.isLoggedIn && (
                            <Fragment>
                                <Button className="nav-button"><Link to="/login">Log in</Link></Button>
                                <Button className="nav-button"><Link to="/signup">Sign up</Link></Button>
                            </Fragment>
                            )
                        } 

                        {authContext.isLoggedIn && (
                            <Button className="nav-button"><Link to="/logout">Log out</Link></Button>
                            )
                        }
                    </div>
                </ul>
            </nav>
        </Fragment>
    )
}

export default NavBar;


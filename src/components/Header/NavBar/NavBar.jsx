import { Fragment, useContext } from "react";

import "./NavBar.css"

import AuthContext from "../../store/auth-context";

import Button from "../../UI/Button/TextButton";



const NavBar = () => {

    const authContext = useContext(AuthContext)

    return (
        <Fragment>
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-item logo-text"><span id="qr-text">QR</span><span id="code-text">Code</span></li>

                    <div className="nav-item">
                        {!authContext.isLoggedIn && (
                            <Fragment>
                                <Button className="nav-button">Log in</Button>
                                <Button className="nav-button">Sign up</Button>
                            </Fragment>
                            )
                        } 

                        {authContext.isLoggedIn && (
                            <Button className="nav-button">Log out</Button>
                            )
                        }
                    </div>
                </ul>
            </nav>
        </Fragment>
    )
}

export default NavBar;


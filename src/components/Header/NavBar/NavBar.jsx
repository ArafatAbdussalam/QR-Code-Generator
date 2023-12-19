import { Fragment, useContext } from "react";

import Button from "../../UI/Button/TextButton";
import "./NavBar.css"
import AuthContext from "../../store/auth-context";


const NavBar = () => {

    const authContext = useContext(AuthContext)

    return (
        <Fragment>
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-item">QR Code</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">How to use</li>

                    {!authContext.isLoggedIn && (
                        <Fragment>
                            <Button className="nav-button" onClick={authContext.login}>Log in</Button>
                            <Button className="nav-button" onClick={authContext.onSignup}>Sign up</Button>
                        </Fragment>
                        )
                    }

                    {authContext.isLoggedIn && (
                        <Button className="nav-button" onClick={authContext.logout}>Log out</Button>
                        )
                    }
                </ul>
            </nav>
        </Fragment>
    )
}

export default NavBar;
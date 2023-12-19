import { Fragment, useContext } from "react";

import Button from "../UI/Button/Button";
import "./Header.css"
import AuthContext from "../store/auth-context";


const Header = () => {

    const authContext = useContext(AuthContext)

    return (
        <Fragment>
            <header className="header">
                <nav className="header-nav">
                    <ul className="header-nav-items">
                        <li className="header-nav-item">QR Code</li>
                        <li className="header-nav-item">About</li>
                        <li className="header-nav-item">How to use</li>

                        {!authContext.isLoggedIn && (
                            <Fragment>
                                <Button className="header-button" onClick={authContext.onLogin}>Log in</Button>
                                <Button className="header-button" onClick={authContext.onSignup}>Sign up</Button>
                            </Fragment>
                            )
                        }

                        {authContext.isLoggedIn && (
                            <Button className="header-button" onClick={authContext.logout}>Log out</Button>
                            )
                        }
                    </ul>
                </nav>
            </header>
        </Fragment>
    )
}

export default Header;
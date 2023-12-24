import React, { Fragment } from "react";

import NavBar from "./NavBar/NavBar";
import About from "./About/About";

const Header = () => {

    return(
        <Fragment>
            <NavBar />
            <About />
        </Fragment>
    )
}

export default Header;
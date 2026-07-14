import React from "react";

import "./Footer.css"

const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (
        <>
            <footer className="footer">
                <p>Copyright, 2023, Arafat Abdussalam.</p>
            </footer>
        </>
    )
}

export default Footer;

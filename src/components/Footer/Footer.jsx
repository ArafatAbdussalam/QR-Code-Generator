import React from "react";

import "./Footer.css"

const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (
        <>
            <footer className="footer">
                <p> &copy; Copyright {currentYear}. Client-side by <a href="https://github.com/ArafatAbdussalam" target="_blank">Arafat Abdussalam</a> and Server-side by <a href="https://github.com/emmakolade" target="_blank">Emmanuel Akolade</a> using ReactJs(JavaScript) and Django(Python).</p>
            </footer>
        </>
    )
}

export default Footer;
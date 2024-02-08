import React from "react";

import "./About.css"

const About = () => {

    return (
        <section className="about">
            <article>
                <h2><span className="qr-code--heading--text">Qr code generator...</span><br></br>..allows you to create qr code image based on your choice.</h2>
                <h2>Certain features work for registered users only. To use those features, <br></br>ensure that you are logged in.</h2>
                <h4>You can generate qr code for texts, links, wifi connection, social media handles, among others.</h4>
                <h4>You can also download the qr code after it has finished generating.</h4>
            </article>

            <article>
                <h1 className="how-to--text">How to generate qr code image: </h1>
                <h4><span className="step-text">Step 1: </span> Click the qr button</h4>
                <h4><span className="step-text">Step 2: </span> Enter your desired input values</h4>
                <h4><span className="step-text">Step 3: </span>Click the generate button</h4>
                <h4><span className="step-text">Step 4: </span>Click the download button</h4>
            </article>
        </section>
    )
}

export default About;
import { Fragment } from "react";
import About from "./About/About";
import HowToUse from "./HowToUse/HowToUse";

const SectionContainer = () => {

    return (
        <Fragment>
            <About />
            <HowToUse />
        </Fragment>
    )
}

export default SectionContainer;
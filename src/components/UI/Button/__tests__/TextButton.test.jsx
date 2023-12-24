import { render } from "@testing-library/react";
import '@testing-library/jest-dom'

import React from "react"

import TextButton from "../TextButton";

test ( "TextButton expected class", () => {
    const component = render( <TextButton>Hello</TextButton> )
    const selectedMode = component.getByText("Hello")
    
    expect(selectedMode).toHaveClass("text-button")

})
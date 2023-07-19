import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import Button from "./index";

describe("Button", () => {
  it("should renders without errors", () => {
    render(<Button />);
  });

  it("should renders title 'Click me' when button render", () => {
    const stubTitle = "Click me";

    render(<Button title={stubTitle} />);

    expect(screen.getByText(stubTitle)).toBeInTheDocument();
  });

  it("should calls the onClick function when button clicked", () => {
    const stubTitle = "Click me";
    const onClickMock = jest.fn();
    render(<Button title={stubTitle} onClick={onClickMock} />);
    const button = screen.getByText("Click me");

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});

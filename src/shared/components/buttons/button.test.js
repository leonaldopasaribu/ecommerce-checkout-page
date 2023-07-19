import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import Button from "./index";

describe("Button", () => {
  it("should renders without errors", () => {
    render(<Button />);
  });

  it("should renders label 'Click me' when button render", () => {
    const stubLabel = "Click me";

    render(<Button label={stubLabel} />);

    expect(screen.getByText(stubLabel)).toBeInTheDocument();
  });

  it("should calls the onClick function when button clicked", () => {
    const stubLabel = "Click me";
    const onClickMock = jest.fn();
    render(<Button label={stubLabel} onClick={onClickMock} />);
    const button = screen.getByText("Click me");

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});

import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

import userEvent from "@testing-library/user-event";

const LABEL = "Clique aqui";

describe("Button - Component", () => {
  it("should render the component with right label", () => {
    render(<Button>{LABEL}</Button>);
    const buttonLabel = screen.getByText(LABEL);

    userEvent.click(buttonLabel);
    expect(buttonLabel).toBeInTheDocument();
  });

  it("should call fn when in clicked", async () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>{LABEL}</Button>);
    const buttonLabel = screen.getByText(LABEL);

    await userEvent.click(buttonLabel);
    expect(onClick).toHaveBeenCalled();
  });
});

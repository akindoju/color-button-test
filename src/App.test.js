import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct intial color", () => {
  render(<App />);

  //find an element with the role of button and text of 'change to blue'
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });

  //expect bg color to be red
  expect(colorBtn).toHaveStyle({ backgroundColor: "red" });

  //click btn

  fireEvent.click(colorBtn);

  //expect bg color to be blue
  expect(colorBtn).toHaveStyle({ backgroundColor: "blue" });

  //expect bt text to be 'Change to red'
  expect(colorBtn.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  //check that button starts out enabled
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });
  expect(colorBtn).toBeEnabled();

  //check that checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox functionality", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox");
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });

  //when checkbox is enabled
  fireEvent.click(checkbox);
  expect(colorBtn).toBeDisabled();

  //when checkbox is disabled
  fireEvent.click(checkbox);
  expect(colorBtn).toBeEnabled();
});

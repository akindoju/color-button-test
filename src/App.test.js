import App from "./App";
import { replaceCamelWithSpaces } from "./App";
import { fireEvent, getByRole, render, screen } from "@testing-library/react";

test("button has correct intial color", () => {
  render(<App />);

  //find an element with the role of button and text of 'change to Midnight Blue'
  const colorBtn = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  //expect bg color to be Medium Violet Red
  expect(colorBtn).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  //click btn

  fireEvent.click(colorBtn);

  //expect bg color to be Midnight Blue
  expect(colorBtn).toHaveStyle({ backgroundColor: "MidnightBlue" });

  //expect bt text to be 'Change to Medium Violet Red'
  expect(colorBtn).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);

  //check that button starts out enabled
  const colorBtn = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorBtn).toBeEnabled();

  //check that checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox functionality", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox");
  const colorBtn = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  //when checkbox is checked
  fireEvent.click(checkbox);
  expect(colorBtn).toBeDisabled();
  expect(colorBtn).toHaveStyle({ backgroundColor: "grey" });

  //when checkbox is unchecked
  fireEvent.click(checkbox);
  expect(colorBtn).toBeEnabled();
  expect(colorBtn).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  //when checkbox is unchecked but button is clicked
  fireEvent.click(colorBtn);
  expect(colorBtn).toHaveStyle({ backgroundColor: "Midnight Blue" });

  //when btn is clicked to blue then checkbox is checked
  fireEvent.click(checkbox);
  expect(colorBtn).toHaveStyle({ backgroundColor: "grey" });

  //when checkbox is unchecked and style is Midnight Blue
  fireEvent.click(checkbox);
  expect(colorBtn).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});

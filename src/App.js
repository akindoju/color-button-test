import { useState } from "react";
import "./App.css";

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
};

const App = () => {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);

  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div>
      <button
        style={{ backgroundColor: isCheckBoxChecked ? "grey" : buttonColor }}
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
        disabled={isCheckBoxChecked}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        type="checkbox"
        onChange={() => {
          setIsCheckBoxChecked((isCheckBoxChecked) => !isCheckBoxChecked);
        }}
      />
    </div>
  );
};
export default App;

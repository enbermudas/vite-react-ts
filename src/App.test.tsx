import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  test("should render basic skeleton", () => {
    render(<App />);

    expect(screen.getByText(/app is over here./i)).toBeDefined();
  });
});

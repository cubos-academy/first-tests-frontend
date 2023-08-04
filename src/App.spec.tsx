import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Test This Component", () => {
  test("Should be have a h1 tag with text Vite + React", async () => {
    render(<App />);

    const h1 = await screen.findByRole("heading", { name: "Vite + React" });

    expect(h1).toBeInTheDocument();
  });

  test("Should be make a value increment after click in button", async () => {
    render(<App />);

    const button = await screen.findByRole("button", { name: /count is/ });

    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);

    const count = await screen.findByText("count is 3");

    expect(count).toBeTruthy();
  });
});

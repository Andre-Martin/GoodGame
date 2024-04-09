import { render, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { BrowserRouter, MemoryRouter } from "react-router-dom";

import App from "../App";

describe("App components rendering stages", () => {
  it("App component renders lazy components correctly", async () => {
    const { getByRole, getByLabelText } = render(<App />, {
      wrapper: BrowserRouter,
    });
    //initially, due to react.lazy/react.suspense, user views spinner before the content is completely rendered
    expect(getByRole("spinner")).toBeInTheDocument();

    //after some time user should view the actual content of the website(in this case - search bar)
    await waitFor(() => {
      expect(getByLabelText("Quick Search")).toBeInTheDocument();
    });
  });

  it("Bad routes should display Page404 with correct message", async () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/fasfsafsa"]}>
        <App />
      </MemoryRouter>
    );

    //Since the url specified has no matches, it should render error gif with link to home page
    await waitFor(() => {
      expect(getByText("Back to Main Page")).toBeInTheDocument();
    });
  });
});

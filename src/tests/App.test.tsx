import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Footer from "../components/Footer";

// Tests
describe("Renders footer correctly", async () => {
  it("Should render the footer of the page correctly", async () => {
    render(<Footer />);
    const h1 = await screen.queryByText("COPYRIGHT 2024");
    expect(h1).not.toBeNull();
  });
});

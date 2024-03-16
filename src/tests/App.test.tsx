import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

import { renderWithProviders } from "../utils/test-utils";
import { setupStore } from "../features/store";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";

describe("Initial Page render", async () => {
  it("Initial Home component render", async () => {
    render(<Home />, { wrapper: BrowserRouter });
    const img = await screen.getByText("Good Game");
    const searchInput = await screen.getByPlaceholderText("Quick Search");
    const button = await screen.getByText("ASK GG");

    expect(img).not.toBeNull();
    expect(searchInput).not.toBeNull();
    expect(button).not.toBeNull();
  });

  it("Initial Header render", async () => {
    render(<Header />, { wrapper: BrowserRouter });
    const link = await screen.getByText("Home");
    expect(link).not.toBeNull();
  });

  it("Initial Footer render", async () => {
    render(<Footer />);
    const p = await screen.getByText("COPYRIGHT 2024");
    expect(p).not.toBeNull();
  });
});

// import { beforeAll, afterEach, afterAll, it, describe, expect } from "vitest";
// import { http, HttpResponse, delay } from "msw";
// import { setupServer } from "msw/node";
// import { fireEvent, screen } from "@testing-library/react";

// import { renderWithProviders } from "../utils/test-utils";
// import GameList from "../pages/GameList";

// export const handlers = [
//   http.get("/api/user", async () => {
//     await delay(150);
//     return HttpResponse.json("John Smith");
//   }),
// ];

// const server = setupServer(...handlers);

// // Enable API mocking before tests.
// beforeAll(() => server.listen());

// // Reset any runtime request handlers we may add during the tests.
// afterEach(() => server.resetHandlers());

// // Disable API mocking after the tests are done.
// afterAll(() => server.close());

// it("fetches & receives a user after clicking the fetch user button", async () => {
//   renderWithProviders(<GameList />);

//   // should show no user initially, and not be fetching a user
//   expect(screen.getByText(/no user/i)).not.toBeNull();
//   expect(screen.queryByText(/Fetching user\.\.\./i)).toBeNull();

//   // after clicking the 'Fetch user' button, it should now show that it is fetching the user
//   fireEvent.click(screen.getByRole("button", { name: /Fetch user/i }));
//   expect(screen.getByText(/no user/i)).not.toBeNull();

//   // after some time, the user should be received
//   expect(await screen.findByText(/John Smith/i)).not.toBeNull();
//   expect(screen.queryByText(/no user/i)).toBeNull();
//   expect(screen.queryByText(/Fetching user\.\.\./i)).toBeNull();
// });

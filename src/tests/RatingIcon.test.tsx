import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import RatingIcon from "../components/RatingIcon";

describe("Rating Icon component displays correct color, depending on its rating value", () => {
  it("Background color for high rating", () => {
    const { getByTestId } = render(<RatingIcon rating={"9"} />);
    expect(getByTestId("background")).toHaveStyle({
      backgroundColor: "#28A745",
    });
  });
  it("Rating color for average rating ", () => {
    const { getByTestId } = render(<RatingIcon rating={"6"} />);
    expect(getByTestId("background")).toHaveStyle({
      backgroundColor: "#FFC107",
    });
  });
  it("Rating color for low rating", () => {
    const { getByTestId } = render(<RatingIcon rating={"4"} />);
    expect(getByTestId("background")).toHaveStyle({
      backgroundColor: "#E8343A",
    });
  });
  it("Rating color for not specified rating", () => {
    const { getByTestId } = render(<RatingIcon rating={"N/A"} />);
    expect(getByTestId("background")).toHaveStyle({
      backgroundColor: "#555555",
    });
  });
});

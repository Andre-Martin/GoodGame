import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import MarketPlaceTabItem from "../components/SingleGame/TabPanel/MPTab/MarketPlaceTabItem";
import CommentTabItem from "../components/SingleGame/TabPanel/CommentTab/CommentTabItem";
import VideoTabItem from "../components/SingleGame/TabPanel/VideoTab/VideoTabItem";

import {
  MockFormattedMP,
  MockFormattedComments,
  MockFormattedVideo,
} from "../utils/mockInfo";

import { getTimeAgo } from "../utils/common";

describe("Pure components", () => {
  it("Market Place Item renders correctly and displays correct information", () => {
    const { getByText } = render(
      <MarketPlaceTabItem {...MockFormattedMP[0]} title="Brass" />
    );
    const { currency, value } = MockFormattedMP[0].price;

    expect(getByText(getTimeAgo(MockFormattedMP[0].date))).toBeInTheDocument();
    expect(getByText(`${currency} ${value}`)).toBeInTheDocument();
  });

  it("Market Place Item renders correctly and displays correct information", () => {
    const { getByText, getByTestId } = render(
      <CommentTabItem {...MockFormattedComments[0]} />
    );

    expect(getByText(MockFormattedComments[0].value)).toBeInTheDocument();
    expect(getByTestId("background")).toHaveStyle({
      backgroundColor: "#555555",
    });
  });

  it("Video Tab Item renders correctly and displays correct information", () => {
    const { getByText } = render(<VideoTabItem {...MockFormattedVideo} />);

    const formattedDate = getTimeAgo(MockFormattedVideo.date);

    expect(getByText(formattedDate)).toBeInTheDocument();
    expect(getByText(MockFormattedVideo.title)).toBeInTheDocument();
  });
});

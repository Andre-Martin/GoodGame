import { describe, it, expect } from "vitest";

import { getYoutubeImgByVideoID, getTimeAgo } from "../utils/common";

describe("Common functions testing", () => {
  it("getYoutubeImgByVideoID function gets correct video preview image depending on given video url", () => {
    const videLink = "http://www.youtube.com/watch?v=IFoJ_Xu-V2A";
    const imageURL = getYoutubeImgByVideoID(videLink);
    expect(imageURL).toBe(
      "http://img.youtube.com/vi/IFoJ_Xu-V2A/hqdefault.jpg"
    );
  });

  it("getTimeAgo function correctly formats the given date", () => {
    const currentDate: Date = new Date("2024-04-08T23:51:27.316Z");
    const data = {
      "2013-10-21T06:14:04-05:00": "10 years ago",
      "2024-04-08T22:51:27.316Z": "1 hour ago",
      "2024-01-08T22:51:27.316Z": "3 months ago",
      "2024-04-05T22:51:27.316Z": "3 days ago",
    };
    for (const [postDate, result] of Object.entries(data)) {
      expect(getTimeAgo(postDate, currentDate)).toBe(result);
    }
  });
});

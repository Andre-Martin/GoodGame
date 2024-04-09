import { describe, it, expect } from "vitest";

import {
  parseXMLJsonStats,
  parseXMLJsonVideo,
  parseXMLJsonComments,
  parseXMLJsonCommonInfo,
} from "../utils/parser";

import {
  MockXMLJsonThing,
  MockXMLJsonStats,
  MockFormattedStats,
  MockFormattedVideo,
  MockFormattedComments,
  MockFormattedCommonInfo,
} from "../utils/mockInfo";

describe("Parser functions testing", () => {
  it("Parsing stats info correctly", () => {
    const result = parseXMLJsonStats(MockXMLJsonStats);

    expect(result.averageRating).toBe(MockFormattedStats.averageRating);
    expect(result.owned).toBe(MockFormattedStats.owned);
    expect(result.median).toBe(MockFormattedStats.median);
    expect(result.buyersAverage).toBe(MockFormattedStats.buyersAverage);
    expect(result.trading).toBe(MockFormattedStats.trading);
  });

  it("Parsing BoardGame info correctly", () => {
    const result = parseXMLJsonCommonInfo(MockXMLJsonThing);

    expect(result.maxPlayers).toBe(MockFormattedCommonInfo.maxPlayers);
    expect(result.minPlayers).toBe(MockFormattedCommonInfo.minPlayers);
    expect(result.maxPlaytime).toBe(MockFormattedCommonInfo.maxPlaytime);
    expect(result.minPlaytime).toBe(MockFormattedCommonInfo.minPlaytime);
    expect(result.minAge).toBe(MockFormattedCommonInfo.minAge);
    expect(result.playtime).toBe(MockFormattedCommonInfo.playtime);
  });

  it("Parsing videos info correctly", () => {
    const result = parseXMLJsonVideo(MockXMLJsonThing);

    expect(result[0].author).toBe(MockFormattedVideo.author);
    expect(result[0].category).toBe(MockFormattedVideo.category);
    expect(result[0].date).toBe(MockFormattedVideo.date);
    expect(result[0].id).toBe(MockFormattedVideo.id);
    expect(result[0].date).toBe(MockFormattedVideo.date);
    expect(result[0].language).toBe(MockFormattedVideo.language);
  });

  it("Parsing Comment info correctly", () => {
    const result = parseXMLJsonComments(MockXMLJsonThing);

    for (let i = 0; i < result.length; i++) {
      expect(result[i].rating).toBe(MockFormattedComments[i].rating);
      expect(result[i].username).toBe(MockFormattedComments[i].username);
      expect(result[i].value).toBe(MockFormattedComments[i].value);
    }
  });
});

import type {
  SingleGameInfo,
  SearchInfo,
  ThingInfo,
  XMLJsonThingResponse,
  Top50Info,
  XMLJsonTop50Response,
} from "./types";

import {
  BggThingResponse,
  BggSearchResponse,
} from "@code-bucket/board-game-geek";

import { ITEMS_PER_PAGE } from "./constants";

export const getSearchItemsByPage = (page: number, ids: number[]) => {
  const lastItem = page * ITEMS_PER_PAGE;
  return ids.slice(lastItem - ITEMS_PER_PAGE, lastItem);
};

export const clearText = (text?: string): string => {
  if (!text) return "";
  const regex = /&#.*;&#.*;/g;
  const result = text.replaceAll(regex, "");
  return result;
};

export const getIDs = (start: number, amount: number): string => {
  let result = "";
  for (let i = start; i <= start + amount; i++) {
    result += `${i},`;
  }
  return result.slice(0, result.length - 1);
};

export const concatIDs = (arr: number[]): string => {
  return arr.join(",");
};

export const formatIDsFromSearch = (arr: any): number[] => {
  const result = [];
  for (const item of arr) {
    result.push(item.id);
  }
  return result;
};

export const parseFromXMLJsonThing = ({
  items: item,
}: XMLJsonThingResponse): SingleGameInfo => {
  let title: string;
  if (item.item.name?.length) {
    title = item.item.name[0]._attributes.value;
  } else title = "";

  const id = item.item._attributes?.id,
    type = item.item._attributes?.type,
    description = item.item.description?._text,
    year = item.item.yearpublished?._attributes.value,
    image = item.item.image?._text,
    thumbnail = item.item.thumbnail?._text,
    minAge = item.item.minage?._attributes.value,
    playtime = item.item.playingtime?._attributes.value,
    minPlaytime = item.item.minplaytime?._attributes.value,
    maxPlaytime = item.item.maxplaytime?._attributes.value,
    minPlayers = item.item.minplayers?._attributes.value,
    maxPlayers = item.item.maxplayers?._attributes.value;

  let ranks, userRated, averageRating;

  if (Array.isArray(item.item.statistics?.ratings.ranks.rank)) {
    ranks = item.item.statistics.ratings.ranks.rank.map(
      (item) => item._attributes
    );
  } else ranks = item.item.statistics?.ratings.ranks.rank._attributes.value;

  if (item.item.statistics?.ratings.usersrated._attributes.value) {
    userRated = item.item.statistics.ratings.usersrated._attributes.value;
  } else userRated = undefined;

  if (item.item.statistics?.ratings.average._attributes.value) {
    averageRating = item.item.statistics.ratings.average._attributes.value;
  } else averageRating = undefined;

  const statistics = {
    averageRating,
    ranks,
    userRated,
  };

  const comments = item.item.comments?.comment.map((item) => item._attributes);

  const result: SingleGameInfo = {
    title,
    id,
    type,
    description,
    year,
    image,
    thumbnail,
    minAge,
    playtime,
    minPlaytime,
    maxPlaytime,
    minPlayers,
    maxPlayers,
    statistics,
    comments,
  };

  return result;
};

const ThingResultPlaceholder: ThingInfo = {
  id: undefined,
  title: undefined,
  year: undefined,
  thumbnail: undefined,
  image: undefined,
  description: undefined,
};

export const parseFromBggThings = (
  data: BggThingResponse | null
): ThingInfo[] => {
  const result = [];
  if (!data?.items) return [ThingResultPlaceholder];
  for (const item of data.items) {
    const { id, names, yearpublished, description, image, thumbnail } = item;

    result.push({
      id,
      title: names[0]?.value,
      year: yearpublished,
      description,
      thumbnail,
      image,
    });
  }
  return result;
};

export const parseFromXMLJsonTop50 = (
  data: XMLJsonTop50Response
): Top50Info[] => {
  const result: Top50Info[] = [];

  for (const item of data.items.item) {
    const { id, rank } = item._attributes,
      thumbnail = item.thumbnail._attributes.value,
      title = item.name._attributes.value,
      year = item?.yearpublished?._attributes?.value;
    result.push({ id, rank, thumbnail, title, year });
  }
  return result;
};

export const parseFromBggSearch = (data: BggSearchResponse): SearchInfo => {
  const result: SearchInfo = [];
  for (const item of data.items) {
    const { id, name, yearpublished } = item;
    result.push({
      id,
      name,
      year: yearpublished + "",
    });
  }
  return result;
};

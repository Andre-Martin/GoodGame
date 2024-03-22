import type { BggResponse } from "./types";

import type { SearchResult } from "./types";

import { ITEMS_PER_PAGE } from "./constants";

export const getSearchItemsByPage = (page: number, ids: number[]) => {
  const lastItem = page * ITEMS_PER_PAGE;
  return ids.slice(lastItem - ITEMS_PER_PAGE, lastItem);
};

export const clearText = (text?: string): string => {
  if (!text) return "";
  const regex = /&#.*;&#.*;/g;
  let newText = text.replaceAll(regex, "");
  return newText;
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

export const parseBoardgameInfo = (
  data: BggResponse[] | any,
  options?: { xmlJs?: boolean; searchResponse?: boolean }
) => {
  if (options?.xmlJs) {
    return parseFromTop50(data);
  } else if (options?.searchResponse) {
    return parseFromSearch(data);
  } else {
    return parseFromThing(data);
  }
};

type ThingResult = {
  id: number;
  name: string;
  year: number;
  thumbnail: string;
  img: string;
  description: string;
  minplayers: number;
  maxplayers: number;
  minplaytime: number;
  maxplaytime: number;
};

const parseFromThing = (data: any): ThingResult | ThingResult[] => {
  const result = [];
  for (const item of data) {
    const {
      id,
      names,
      yearpublished,
      description,
      img,
      thumbnail,
      minplayers,
      maxplayers,
      maxplaytime,
      minplaytime,
    } = item;

    result.push({
      id,
      name: names[0]?.value,
      year: yearpublished,
      description,
      minplayers,
      maxplayers,
      minplaytime,
      maxplaytime,
      thumbnail,
      img,
    });
  }

  if (result.length > 1) return result;
  else return result[0];
};

type Top50Result = {
  id: number;
  rank: number;
  thumbnail: string;
  name: string;
  year: number;
}[];

const parseFromTop50 = (data: any): Top50Result => {
  const result: Top50Result = [];
  for (const item of data) {
    const { id, rank } = item._attributes,
      thumbnail = item.thumbnail._attributes.value,
      name = item.name._attributes.value,
      year = item.yearpublished._attributes.value;
    result.push({ id, rank, thumbnail, name, year });
  }

  return result;
};

const parseFromSearch = (data: any): SearchResult => {
  const result: SearchResult = [];
  for (const item of data) {
    const { id, name, yearPublished } = item;
    result.push({
      id,
      name,
      year: yearPublished,
    });
  }
  return result;
};

import axios from "axios";
import {
  parseBggXmlApi2SearchResponse,
  parseBggXmlApi2ThingResponse,
} from "@code-bucket/board-game-geek";

import type { BggResponse } from "./types";
import { getIDs } from "./common";

const __BASE_API = "https://api.geekdo.com/xmlapi2/";

export const getBoardgames = async (start: number, amount: number) => {
  try {
    const ids = getIDs(start, amount);
    const { data } = await axios.get(`${__BASE_API}thing?id=${ids}&versions=1`);
    const bggResponse = parseBggXmlApi2ThingResponse(data);

    return parseBoardgameInfo(bggResponse?.items);
  } catch (err) {
    console.log(err);
  }
};

export const getBoardgameById = async (id: number) => {
  try {
    const { data } = await axios.get(
      `https://api.geekdo.com/xmlapi2/thing?id=${id}&versions=1`
    );
    const bggResponse = parseBggXmlApi2ThingResponse(data);
    return parseBoardgameInfo(bggResponse?.items);
  } catch (err) {
    console.log(err);
  }
};

const parseBoardgameInfo = async (data: BggResponse[] | any) => {
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
      name: names[0].value,
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

import axios from "axios";
import {
  parseBggXmlApi2SearchResponse,
  parseBggXmlApi2ThingResponse,
} from "@code-bucket/board-game-geek";

import { xml2json } from "xml-js";

import { getIDs, parseBoardgameInfo } from "./common";

const __BASE_API = "https://api.geekdo.com/xmlapi2/";

export const getTop50Boargames = async () => {
  try {
    const { data } = await axios.get(`${__BASE_API}hot?boardgames`);
    const json = JSON.parse(xml2json(data, { compact: true }));

    return parseBoardgameInfo(json.items.item, { xmlJs: true });
  } catch (err) {
    console.log(err);
  }
};

export const getBoardgames = async (
  start: number,
  amount: number,
  ids?: string
) => {
  try {
    if (!ids) ids = getIDs(start, amount);
    const { data } = await axios.get(
      `${__BASE_API}thing?id=${ids}&versions=1&comments=1`
    );
    const bggResponse = parseBggXmlApi2ThingResponse(data);
    return parseBoardgameInfo(bggResponse?.items);
  } catch (err) {
    console.log(err);
  }
};

export const getBoardgameById = async (id: number) => {
  try {
    const { data } = await axios.get(
      `${__BASE_API}thing?id=${id}&versions=1&stats=1`
    );
    const bggResponse = parseBggXmlApi2ThingResponse(data);
    return parseBoardgameInfo(bggResponse?.items);
  } catch (err) {
    console.log(err);
  }
};

export const searchBoardGameByName = async (name: string) => {
  try {
    const { data } = await axios.get(
      `${__BASE_API}search?query=${name}&type=boardgame`
    );
    const bggResponse = parseBggXmlApi2SearchResponse(data);
    return parseBoardgameInfo(bggResponse.items, { searchResponse: true });
  } catch (err) {
    console.log(err);
  }
};

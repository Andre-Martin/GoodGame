import axios from "axios";

import {
  parseBggXmlApi2SearchResponse,
  parseBggXmlApi2ThingResponse,
} from "@code-bucket/board-game-geek";

import { xml2json } from "xml-js";

import {
  parseFromXMLJsonThing,
  parseFromBggSearch,
  parseFromBggThings,
  parseFromXMLJsonTop50,
} from "./parser";

import { getIDs } from "./common";

import { __BASE_API } from "./constants";

//types

import type {
  BggThingResponse,
  BggSearchResponse,
} from "@code-bucket/board-game-geek";

import type { XMLJsonThingResponse, XMLJsonTop50Response } from "./types";

export const getTop50Boargames = async () => {
  try {
    const { data } = await axios.get(`${__BASE_API}hot?boardgames`);
    const json: XMLJsonTop50Response = JSON.parse(
      xml2json(data, { compact: true })
    );
    return parseFromXMLJsonTop50(json);
  } catch (err) {
    console.log(err);
  }
};

export const getBoardgames = async (ids: string) => {
  try {
    const { data } = await axios.get(`${__BASE_API}thing?id=${ids}&versions=1`);
    const bggResponse: BggThingResponse = parseBggXmlApi2ThingResponse(
      data
    ) as BggThingResponse;
    return parseFromBggThings(bggResponse);
  } catch (err) {
    console.log(err);
  }
};

export const getBoardgameById = async (id: number) => {
  try {
    const { data } = await axios.get(
      `${__BASE_API}thing?id=${id}&comments=1&stats=1&videos=1&marketplace=1`
    );
    const XMLJsonResponse: XMLJsonThingResponse = JSON.parse(
      xml2json(data, { compact: true })
    );
    return parseFromXMLJsonThing(XMLJsonResponse);
  } catch (err) {
    console.log(err);
  }
};

export const searchBoardGameByName = async (name: string) => {
  try {
    const { data } = await axios.get(
      `${__BASE_API}search?query=${name}&type=boardgame`
    );
    const bggResponse: BggSearchResponse = parseBggXmlApi2SearchResponse(data);
    return parseFromBggSearch(bggResponse);
  } catch (err) {
    console.log(err);
  }
};

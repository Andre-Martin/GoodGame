import { IMAGE_NOT_FOUND } from "./constants";
import type {
  SingleGameInfo,
  SearchInfo,
  ThingInfo,
  XMLJsonThingResponse,
  Top50Info,
  XMLJsonTop50Response,
  XMLJsonName,
  XMLJsonLink,
  XMLJsonStats,
  SingleGameMPItem,
  SingleGameStats,
  SingleGameComment,
  SingleGameLinks,
  SingleGameVideo,
  XMLJson_AttributesValue,
} from "./types";

import type {
  BggThingResponse,
  BggSearchResponse,
} from "@code-bucket/board-game-geek";

const parseXMLJsonTitles = (names: XMLJsonName[] | XMLJsonName) => {
  let title: string = "";
  const alternativeNames: string[] = [];
  if (Array.isArray(names)) {
    names.forEach((item) => {
      if (item._attributes.type === "primary") title = item._attributes.value;
      else alternativeNames.push(item._attributes.value);
    });
    return { title, alternativeNames };
  } else {
    title = names._attributes.value;
    return { title, alternativeNames };
  }
};

const parseBggXMLJsonLinks = (data: XMLJsonLink[]) => {
  const result: SingleGameLinks = {
    categories: [],
    designers: [],
    artists: [],
    publishers: [],
    mechanics: [],
    families: [],
    accessories: [],
    implementations: [],
    expansions: [],
    compilations: [],
  };

  data.forEach((item) => {
    switch (item._attributes.type) {
      case "boardgamecategory":
        result.categories.push(item._attributes.value);
        break;
      case "boardgameartist":
        result.artists.push(item._attributes.value);
        break;
      case "boardgamedesigner":
        result.designers.push(item._attributes.value);
        break;
      case "boardgamepublisher":
        result.publishers.push(item._attributes.value);
        break;
      case "boardgamemechanic":
        result.mechanics.push(item._attributes.value);
        break;
      case "boardgameaccessory":
        result.accessories.push(item._attributes.value);
        break;
      case "boardgamefamily":
        result.families.push(item._attributes.value);
        break;
      case "boardgameimplementation":
        result.implementations.push(item._attributes.value);
        break;
      case "boardgameexpansion":
        result.expansions.push(item._attributes.value);
        break;
      case "boardgamecompilation":
        result.compilations.push(item._attributes.value);
        break;
    }
  });

  return result;
};

const parseXMLJsonStats = (data: XMLJsonStats) => {
  const statistics: SingleGameStats = {
    averageRating: "",
    complexity: "",
    buyersAverage: "",
    median: "",
    totalComments: "",
    complexityRated: "",
    owned: "",
    stddev: "",
    trading: "",
    usersRated: "",
    wishing: "",
    wanting: "",
    ranks: [
      {
        type: "",
        id: "",
        name: "",
        fullName: "",
        value: "",
      },
    ],
  }; //returned value
  const {
    average,
    averageweight,
    bayesaverage,
    median,
    numcomments,
    numweights,
    owned,
    ranks,
    stddev,
    trading,
    usersrated,
    wanting,
    wishing,
  } = data.ratings;

  statistics.averageRating = isNA(average);
  statistics.complexity = isNA(averageweight);
  statistics.buyersAverage = isNA(bayesaverage);
  statistics.median = isNA(median);
  statistics.totalComments = isNA(numcomments);
  statistics.complexityRated = isNA(numweights);
  statistics.owned = isNA(owned);
  statistics.stddev = isNA(stddev);
  statistics.trading = isNA(trading);
  statistics.usersRated = isNA(usersrated);
  statistics.wishing = isNA(wishing);
  statistics.wanting = isNA(wanting);

  if (Array.isArray(ranks.rank)) {
    statistics.ranks = ranks.rank.map((item) => {
      return {
        name: item._attributes.name,
        fullName: item._attributes.friendlyname,
        value: item._attributes.value,
        id: item._attributes.id,
        type: item._attributes.type,
      };
    });
  } else {
    statistics.ranks[0] = {
      name: ranks.rank._attributes.name,
      fullName: ranks.rank._attributes.friendlyname,
      type: ranks.rank._attributes.name,
      id: ranks.rank._attributes.id,
      value: ranks.rank._attributes.value,
    };
  } //else

  return statistics;
}; //praseXMLJsonStats

const isNA = (data: XMLJson_AttributesValue) => {
  if (data._attributes.value === "0") return "N/A";
  else return data._attributes.value;
};

const parseXMLJsonCommonInfo = (data: XMLJsonThingResponse) => {
  const {
    yearpublished,
    minplaytime,
    maxplaytime,
    minplayers,
    maxplayers,
    minage,
    playingtime,
  } = data.items.item;

  const result = {
    year: isNA(yearpublished),
    minPlaytime: isNA(minplaytime),
    maxPlaytime: isNA(maxplaytime),
    playtime: isNA(playingtime),
    minAge: isNA(minage),
    minPlayers: isNA(minplayers),
    maxPlayers: isNA(maxplayers),
  };

  return result;
};

const parseXMLJsonMedia = (data: XMLJsonThingResponse) => {
  let image, thumbnail;
  if (data.items.item.image !== undefined) image = data.items.item.image._text;
  else image = IMAGE_NOT_FOUND;
  if (data.items.item.thumbnail !== undefined)
    thumbnail = data.items.item.thumbnail._text;
  else thumbnail = IMAGE_NOT_FOUND;

  return { image, thumbnail };
};

const parseXMLJsonComments = (data: XMLJsonThingResponse) => {
  let comments: SingleGameComment[] = [];
  if (Array.isArray(data.items.item.comments?.comment)) {
    comments = data.items.item.comments.comment.map((item) => item._attributes);
  } else if (data.items.item.comments !== undefined) {
    const { rating, username, value } =
      data.items.item.comments.comment._attributes;
    comments.push({ rating, username, value });
  }
  return comments;
};

const parseXMLJsonVideo = (data: XMLJsonThingResponse) => {
  const result: SingleGameVideo[] = [];
  if (Array.isArray(data.items.item.videos.video)) {
    data.items.item.videos.video.forEach((item) => {
      const { title, category, language, link, username, postdate, id } =
        item._attributes;
      result.push({
        title,
        category,
        language,
        link,
        author: username,
        date: postdate,
        id,
      });
    });
  } else if (data.items.item.videos.video !== undefined) {
    const { title, category, language, link, username, postdate, id } =
      data.items.item.videos.video._attributes;
    const video: SingleGameVideo = {
      title,
      category,
      language,
      link,
      author: username,
      date: postdate,
      id,
    };
    result.push(video);
  }
  return result;
};

const parseXMLJsonMarketplace = (data: XMLJsonThingResponse) => {
  const result: SingleGameMPItem[] = [];

  if (Array.isArray(data.items.item.marketplacelistings?.listing)) {
    data.items.item.marketplacelistings.listing.forEach((item) => {
      const { link, listdate, price } = item;
      const mpItem: SingleGameMPItem = {
        link: {
          href: link._attributes.href,
          title: link._attributes.title,
        },
        date: listdate._attributes.value,
        price: {
          currency: price._attributes.currency,
          value: price._attributes.value,
        },
      };
      result.push(mpItem);
    });
  } else if (data.items.item.marketplacelistings?.listing !== undefined) {
    const { link, listdate, price } =
      data.items.item.marketplacelistings.listing;
    const mpItem: SingleGameMPItem = {
      link: {
        href: link._attributes.href,
        title: link._attributes.title,
      },
      date: listdate._attributes.value,
      price: {
        currency: price._attributes.currency,
        value: price._attributes.value,
      },
    };
    result.push(mpItem);
  }
  return result;
};

export const parseFromXMLJsonThing = (
  data: XMLJsonThingResponse
): SingleGameInfo => {
  const { id, type } = data.items.item._attributes;
  const { title, alternativeNames } = parseXMLJsonTitles(data.items.item.name);
  const {
    year,
    minPlaytime,
    maxPlaytime,
    playtime,
    minAge,
    minPlayers,
    maxPlayers,
  } = parseXMLJsonCommonInfo(data);
  const links = parseBggXMLJsonLinks(data.items.item.link);
  const statistics = parseXMLJsonStats(data.items.item.statistics);
  const { image, thumbnail } = parseXMLJsonMedia(data);

  const description = data.items.item.description._text;
  const comments = parseXMLJsonComments(data);
  const videos = parseXMLJsonVideo(data);
  const marketplace = parseXMLJsonMarketplace(data);

  const result: SingleGameInfo = {
    title,
    alternativeNames,
    links,
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
    videos,
    marketplace,
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

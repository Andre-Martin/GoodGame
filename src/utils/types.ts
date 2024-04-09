export type HotItemInfo = {
  id: string;
  title: string;
  rank: string;
  thumbnail: string;
  year?: string;
};

export type ThingInfo = {
  id?: number;
  title?: string;
  year?: number;
  thumbnail?: string;
  image?: string;
  description?: string;
};

export type SearchInfo = {
  id: number;
  name: string;
  year: string;
}[];

export type SingleGameComment = {
  rating: string;
  username: string;
  value: string;
};
type SingleGameRank = {
  type: string;
  id: string;
  name: string;
  value: string;
  fullName: string;
};

export type SingleGameStats = {
  averageRating: string;
  complexity: string;
  buyersAverage: string;
  median: string;
  totalComments: string;
  complexityRated: string;
  owned: string;
  stddev: string;
  trading: string;
  usersRated: string;
  wishing: string;
  wanting: string;
  ranks: SingleGameRank[];
};

export type SingleGameLinks = {
  categories: string[];
  designers: string[];
  artists: string[];
  publishers: string[];
  mechanics: string[];
  families: string[];
  accessories: string[];
  implementations: string[];
  expansions: string[];
  compilations: string[];
};

export type SingleGameVideo = {
  link: string;
  category: string;
  title: string;
  language: string;
  author: string;
  id: string;
  date: string;
};

export type SingleGameMPItem = {
  link: {
    href: string;
    title: string;
  };
  date: string;
  notes: string;
  condition: string;
  price: {
    currency: string;
    value: string;
  };
};

export type SingleGameInfo = {
  id: string;
  type: string;
  title: string;
  description: string;
  thumbnail: string;
  image: string;
  year: string;
  alternativeNames: string[];
  statistics: SingleGameStats;
  comments: SingleGameComment[];
  links: SingleGameLinks;
  videos: SingleGameVideo[];
  marketplace: SingleGameMPItem[];
  minAge: string;
  playtime: string;
  maxPlaytime: string;
  minPlaytime: string;
  maxPlayers: string;
  minPlayers: string;
};

export type XMLJsonComment = {
  _attributes: {
    rating: string;
    username: string;
    value: string;
  };
};

export type XMLJson_AttributesValue = {
  _attributes: {
    value: string;
  };
};

export type XMLJsonName = {
  _attributes: {
    type: "primary" | "alternate";
    value: string;
  };
};

type XMLJsonRank = {
  _attributes: {
    type: string;
    id: string;
    name: string;
    value: string;
    friendlyname: string;
  };
};
type XMLJsonLinkType =
  | "boardgamecategory"
  | "boardgamemechanic"
  | "boardgamefamily"
  | "boardgameexpansion"
  | "boardgameaccessory"
  | "boardgamecompilation"
  | "boardgameimplementation"
  | "boardgamedesigner"
  | "boardgameartist"
  | "boardgamepublisher";

export type XMLJsonLink = {
  _attributes: {
    id: string;
    type: XMLJsonLinkType;
    value: string;
  };
};

export type XMLJsonStats = {
  ratings: {
    usersrated: XMLJson_AttributesValue;
    owned: XMLJson_AttributesValue;
    wishing: XMLJson_AttributesValue;
    wanting: XMLJson_AttributesValue;
    average: XMLJson_AttributesValue;
    averageweight: XMLJson_AttributesValue;
    bayesaverage: XMLJson_AttributesValue;
    median: XMLJson_AttributesValue;
    numcomments: XMLJson_AttributesValue;
    stddev: XMLJson_AttributesValue;
    trading: XMLJson_AttributesValue;
    numweights: XMLJson_AttributesValue;
    ranks: {
      rank: XMLJsonRank[] | XMLJsonRank;
    };
  };
};

export type XMLJsonVideo = {
  _attributes: {
    id: string;
    title: string;
    category: string;
    language: string;
    link: string;
    postdate: string;
    username: string;
  };
};

export type XMLJsonMPItem = {
  link: {
    _attributes: {
      href: string;
      title: string;
    };
  };
  listdate: XMLJson_AttributesValue;
  price: {
    _attributes: {
      currency: string;
      value: string;
    };
  };
  notes: XMLJson_AttributesValue;
  condition: XMLJson_AttributesValue;
};

export type XMLJsonThingResponse = {
  items: {
    item?: {
      name: XMLJsonName[] | XMLJsonName;
      yearpublished: XMLJson_AttributesValue;
      _attributes: {
        id: string;
        type: string;
      };
      description: {
        _text: string;
      };
      image?: {
        _text: string;
      };
      thumbnail?: {
        _text: string;
      };
      link: XMLJsonLink[];
      comments?: {
        comment: XMLJsonComment[] | XMLJsonComment;
      };
      statistics: XMLJsonStats;
      videos: {
        video?: XMLJsonVideo[] | XMLJsonVideo;
        _attributes?: {
          total: string;
        };
      };
      marketplacelistings?: {
        listing: XMLJsonMPItem[] | XMLJsonMPItem;
      };
      minage: XMLJson_AttributesValue;
      maxplaytime: XMLJson_AttributesValue;
      minplaytime: XMLJson_AttributesValue;
      maxplayers: XMLJson_AttributesValue;
      minplayers: XMLJson_AttributesValue;
      playingtime: XMLJson_AttributesValue;
    };
  };
};

type XMLJsonTop50Item = {
  _attributes: {
    id: string;
    rank: string;
  };
  name: XMLJson_AttributesValue;
  thumbnail: XMLJson_AttributesValue;
  yearpublished?: XMLJson_AttributesValue;
};

export type XMLJsonTop50Response = {
  items: {
    item: XMLJsonTop50Item[];
  };
};

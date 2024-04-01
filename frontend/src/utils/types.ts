export type Top50Info = {
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

type XMLJsonComment = {
  _attributes: {
    rating: string;
    username: string;
    value: string;
  };
};

export type XMLJsonName = {
  _attributes: {
    type: "primary" | "alternative";
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
    usersrated: {
      _attributes: {
        value: string;
      };
    };
    owned: {
      _attributes: {
        value: string;
      };
    };
    wishing: {
      _attributes: {
        value: string;
      };
    };

    wanting: {
      _attributes: {
        value: string;
      };
    };

    average: {
      _attributes: {
        value: string;
      };
    };
    averageweight: {
      _attributes: {
        value: string;
      };
    };
    bayesaverage: {
      _attributes: {
        value: string;
      };
    };
    median: {
      _attributes: {
        value: string;
      };
    };
    numcomments: {
      _attributes: {
        value: string;
      };
    };
    stddev: {
      _attributes: {
        value: string;
      };
    };
    trading: {
      _attributes: {
        value: string;
      };
    };
    numweights: {
      _attributes: {
        value: string;
      };
    };
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
  listdate: {
    _attributes: {
      value: string;
    };
  };
  price: {
    _attributes: {
      currency: string;
      value: string;
    };
  };
};

export type XMLJsonThingResponse = {
  items: {
    item: {
      name: XMLJsonName[] | XMLJsonName;
      yearpublished: {
        _attributes: {
          value: string;
        };
      };
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
      minage: {
        _attributes: {
          value: string;
        };
      };
      maxplaytime: {
        _attributes: {
          value: string;
        };
      };
      minplaytime: {
        _attributes: {
          value: string;
        };
      };
      maxplayers: {
        _attributes: {
          value: string;
        };
      };
      minplayers: {
        _attributes: {
          value: string;
        };
      };

      playingtime: {
        _attributes: {
          value: string;
        };
      };
    };
  };
};

type XMLJsonTop50Item = {
  _attributes: {
    id: string;
    rank: string;
  };
  name: {
    _attributes: {
      value: string;
    };
  };
  thumbnail: {
    _attributes: {
      value: string;
    };
  };
  yearpublished?: {
    _attributes: {
      value: string;
    };
  };
};

export type XMLJsonTop50Response = {
  items: {
    item: XMLJsonTop50Item[];
  };
};

export type card = {
  id: number;
  name: string;
  year: number;
  thumbnail: string;
  description: string;
};

export type chatState = {
  messages: chatItem[];
  cards: card[];
};

export type chatItem = {
  sender: boolean;
  message: message[];
};

type message = {
  content: string;
  recommendations?: recommendation[];
};

type recommendation = {
  content: string;
  id: number;
};

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
};

export type SingleGameStats = {
  averageRating: string;
  complexity: string;
  ranks: SingleGameRank[] | SingleGameRank;
  usersRated: string;
  owned: string;
  wishing: string;
  wanting: string;
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

export type SingleGameInfo = {
  id: string;
  type: string;
  title: string;
  alternativeNames: string[];
  description: string;
  thumbnail: string;
  year: string;
  image: string;
  minAge: string;
  playtime: string;
  maxPlaytime: string;
  minPlaytime: string;
  maxPlayers: string;
  minPlayers: string;
  statistics: SingleGameStats;
  comments: SingleGameComment[];
  links: SingleGameLinks;
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
    ranks: {
      rank: XMLJsonRank[] | XMLJsonRank;
    };
  };
};

export type XMLJsonThingResponse = {
  items: {
    item: {
      comments?: {
        comment: XMLJsonComment[];
      };
      description: {
        _text: string;
      };
      image?: {
        _text: string;
      };
      link: XMLJsonLink[];
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
      name: XMLJsonName[] | XMLJsonName;
      playingtime: {
        _attributes: {
          value: string;
        };
      };
      statistics: XMLJsonStats;
      thumbnail?: {
        _text: string;
      };
      yearpublished: {
        _attributes: {
          value: string;
        };
      };
      _attributes: {
        id: string;
        type: string;
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

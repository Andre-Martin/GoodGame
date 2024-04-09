import type {
  SingleGameStats,
  XMLJsonName,
  XMLJsonStats,
  XMLJsonThingResponse,
  XMLJsonVideo,
  XMLJsonComment,
  XMLJsonLink,
  XMLJsonMPItem,
  SingleGameVideo,
  SingleGameComment,
  SingleGameMPItem,
} from "./types";

export const MockXMLJsonNames: XMLJsonName[] = [
  {
    _attributes: {
      type: "primary",
      value: "Brass: Birmingham",
    },
  },
  {
    _attributes: {
      type: "alternate",
      value: "Brass. Бирмингем",
    },
  },
];

export const MockXMLJsonComments: XMLJsonComment[] = [
  {
    _attributes: {
      username: "13inha",
      rating: "N/A",
      value: "G",
    },
  },
  {
    _attributes: {
      username: "1x0r",
      rating: "N/A",
      value: "Haven't played yet",
    },
  },
  {
    _attributes: {
      username: "1bez",
      rating: "10",
      value:
        "Great game, full controllo of your strategy through constant adjustment of your tactic watching what your opponents do.",
    },
  },
];

export const MockXMLJsonLinks: XMLJsonLink[] = [
  {
    _attributes: {
      type: "boardgamecategory",
      id: "2726",
      value: "Age of Reason",
    },
  },
  {
    _attributes: {
      type: "boardgamecategory",
      id: "1021",
      value: "Economic",
    },
  },
];

export const MockXMLJsonMP: XMLJsonMPItem[] = [
  {
    condition: {
      _attributes: {
        value: "new",
      },
    },
    link: {
      _attributes: {
        href: "https://boardgamegeek.com/market/product/1606184",
        title: "marketlisting",
      },
    },
    listdate: {
      _attributes: {
        value: "Tue, 02 Oct 2018 21:39:43 +0000",
      },
    },
    price: {
      _attributes: {
        currency: "EUR",
        value: "84.95",
      },
    },
    notes: {
      _attributes: { value: "weight: 2009 grams + packaging" },
    },
  },
];
export const MockXMLJsonStats: XMLJsonStats = {
  ratings: {
    usersrated: {
      _attributes: {
        value: "44480",
      },
    },
    owned: {
      _attributes: {
        value: "61827",
      },
    },
    wishing: {
      _attributes: {
        value: "17679",
      },
    },
    wanting: {
      _attributes: {
        value: "1729  ",
      },
    },
    average: {
      _attributes: {
        value: "8.59898",
      },
    },
    averageweight: {
      _attributes: {
        value: "4400",
      },
    },
    bayesaverage: {
      _attributes: {
        value: "8.41669",
      },
    },
    median: {
      _attributes: {
        value: "0",
      },
    },
    numcomments: {
      _attributes: {
        value: "6177",
      },
    },
    stddev: {
      _attributes: {
        value: "1.4164",
      },
    },
    trading: {
      _attributes: {
        value: "212",
      },
    },
    numweights: {
      _attributes: {
        value: "2148",
      },
    },
    ranks: {
      rank: {
        _attributes: {
          type: "subtype",
          id: "1",
          name: "boardgame",
          value: "1",
          friendlyname: "Board Game Rank",
        },
      },
    },
  },
};
export const MockXMLJsonVideo: XMLJsonVideo = {
  _attributes: {
    id: "462561",
    title: "Board Game Gumbo -- playthrough (4p)",
    category: "session",
    language: "English",
    link: "http://www.youtube.com/watch?v=UcQzIZE4LaU",
    postdate: "2023-10-21T06:14:04-05:00",
    username: "BoardGameGumbo",
  },
};

export const MockXMLJsonThing: XMLJsonThingResponse = {
  items: {
    item: {
      name: MockXMLJsonNames,
      yearpublished: {
        _attributes: {
          value: '"2018"',
        },
      },
      comments: {
        comment: MockXMLJsonComments,
      },
      description: {
        _text: "Brass",
      },
      image: {
        _text:
          "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__original/img/FpyxH41Y6_ROoePAilPNEhXnzO8=/0x0/",
      },
      thumbnail: {
        _text:
          "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__thumb/img/o18rjEemoWaVru9Y2TyPwuIaRfE=/fit-in/200x150",
      },
      link: MockXMLJsonLinks,
      marketplacelistings: {
        listing: MockXMLJsonMP,
      },
      maxplayers: {
        _attributes: {
          value: "4",
        },
      },
      minplayers: {
        _attributes: {
          value: "2",
        },
      },
      maxplaytime: {
        _attributes: {
          value: "120",
        },
      },
      minplaytime: {
        _attributes: {
          value: "60",
        },
      },
      minage: {
        _attributes: {
          value: "14",
        },
      },
      playingtime: {
        _attributes: {
          value: "120",
        },
      },
      statistics: MockXMLJsonStats,
      videos: {
        video: MockXMLJsonVideo,
      },
      _attributes: {
        type: "boardgame",
        id: "224517",
      },
    },
  },
};

export const MockFormattedStats: SingleGameStats = {
  averageRating: "8.59898",
  complexity: "3.8841",
  buyersAverage: "8.41669",
  median: "N/A",
  totalComments: "6177",
  complexityRated: "2148",
  owned: "61827",
  stddev: "1.4164",
  trading: "212",
  usersRated: "44480",
  wishing: "17679",
  wanting: "1729",
  ranks: [
    {
      type: "subtype",
      id: "1",
      name: "boardgame",
      fullName: "Board Game Rank",
      value: "1",
    },
  ],
};

export const MockFormattedVideo: SingleGameVideo = {
  id: "462561",
  title: "Board Game Gumbo -- playthrough (4p)",
  category: "session",
  language: "English",
  link: "http://www.youtube.com/watch?v=UcQzIZE4LaU",
  date: "2023-10-21T06:14:04-05:00",
  author: "BoardGameGumbo",
};

export const MockFormattedComments: SingleGameComment[] = [
  {
    username: "13inha",
    rating: "N/A",
    value: "G",
  },
  {
    username: "1x0r",
    rating: "N/A",
    value: "Haven't played yet",
  },
  {
    username: "1bez",
    rating: "10",
    value:
      "Great game, full controllo of your strategy through constant adjustment of your tactic watching what your opponents do.",
  },
];

export const MockFormattedCommonInfo = {
  year: "2018",
  maxPlayers: "4",
  minPlayers: "2",
  maxPlaytime: "120",
  minPlaytime: "60",
  minAge: "14",
  playtime: "120",
};

export const MockFormattedMP: SingleGameMPItem[] = [
  {
    link: {
      href: "https://boardgamegeek.com/market/product/1606184",
      title: "marketlisting",
    },
    date: "Tue, 02 Oct 2018 21:39:43 +0000",
    notes: "",
    condition: "new",
    price: {
      currency: "EUR",
      value: "84.95",
    },
  },
];

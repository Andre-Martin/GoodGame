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

export type SingleGameInfo = {
  id?: string;
  type?: string;
  title?: string;
  description?: string;
  thumbnail?: string;
  year?: string;
  image?: string;
  minAge?: string;
  playtime?: string;
  maxPlaytime?: string;
  minPlaytime?: string;
  maxPlayers?: string;
  minPlayers?: string;
  statistics: {
    averageRating?: string;
    ranks?: SingleGameRank[] | string;
    userRated?: string;
  };
  comments?: SingleGameComment[];
};

type BggXMLJsonComment = {
  _attributes: {
    rating: string;
    username: string;
    value: string;
  };
};

type BggXMLJsonName = {
  _attributes: {
    type: string;
    value: string;
  };
};

type BggXMLJsonRank = {
  _attributes: {
    type: string;
    id: string;
    name: string;
    value: string;
  };
};
export type XMLJsonThingResponse = {
  items: {
    item: {
      comments?: {
        comment: BggXMLJsonComment[];
      };
      description?: {
        _text: string;
      };
      image?: {
        _text: string;
      };
      minage?: {
        _attributes: {
          value: string;
        };
      };
      maxplaytime?: {
        _attributes: {
          value: string;
        };
      };
      minplaytime?: {
        _attributes: {
          value: string;
        };
      };
      maxplayers?: {
        _attributes: {
          value: string;
        };
      };
      minplayers?: {
        _attributes: {
          value: string;
        };
      };
      name?: BggXMLJsonName[];
      playingtime?: {
        _attributes: {
          value: string;
        };
      };
      statistics?: {
        ratings: {
          usersrated: {
            _attributes: {
              value: string;
            };
          };
          average: {
            _attributes: {
              value: string;
            };
          };
          ranks: {
            rank:
              | BggXMLJsonRank[]
              | {
                  _attributes: {
                    type: string;
                    id: number;
                    name: string;
                    value: string;
                  };
                };
          };
        };
      };
      thumbnail?: {
        _text: string;
      };
      yearpublished?: {
        _attributes: {
          value: string;
        };
      };
      _attributes?: {
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

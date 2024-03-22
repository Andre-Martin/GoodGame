type Name = {
  value: string;
  type: "primary" | "alternative";
  sortindex: number;
};

export type BggResponse = {
  id: number;
  names: Name[];
  yearpublished: number;
  description: string;
  thumbnail: string;
  img: string;
  minplayers: number;
  maxplayers: number;
  minplaytime: number;
  maxplaytime: number;
};

export type BggData = {
  number: number;
  id: number;
  name: string;
  year: number;
  description: string;
  thumbnail: string;
  img: string;
  minplayers: number;
  maxplayers: number;
  minplaytime: number;
  maxplaytime: number;
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

export type SearchResult = {
  id: number;
  name: string;
  year: string;
}[];

export type ChatBoxProps = {
  isAI: boolean;
  messages: string[];
  link?: [
    {
      content: string;
      id: number;
    }
  ];
};

export type ChatCardProps = {
  title: string;
  img: string;
  description: string;
  id: number;
  year: number;
};

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

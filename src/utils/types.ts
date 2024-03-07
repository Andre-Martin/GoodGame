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

export type GameListItemsProps = {
  number: number;
  description: string;
  title: string;
  year: number;
  id: number;
};

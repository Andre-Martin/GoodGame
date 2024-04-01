import type { chatState } from "./types";

export const chatMockInfo: chatState = {
  messages: [
    {
      sender: true,
      message: [
        { content: "Hello, I am your AI Assistant - GG." },
        { content: "How can I help you?" },
      ],
    },
    {
      sender: false,
      message: [
        {
          content:
            "Can you recommend educational board games for my 9 years old son? Match can be an interesting subject for my son",
        },
      ],
    },
    {
      sender: true,
      message: [
        {
          content: "Absolutely! Here is what I found...",
          recommendations: [
            {
              content: "1.Clue",
              id: 1,
            },
            {
              content: "2.Rummikub",
              id: 2,
            },
            {
              content: "3.Matheble",
              id: 3,
            },
          ],
        },
      ],
    },
  ],
  cards: [
    {
      name: "Clue",
      year: 2019,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores similique aut natus sed facere quibusdam quis laudantiumasperiores adipisci, molestias sapiente, cum explicabo dolor iureitaque minus. Nihil, a cum.`,
      thumbnail:
        "https://cf.geekdo-images.com/rpwCZAjYLD940NWwP3SRoA__thumb/img/YT6svCVsWqLrDitcMEtyazVktbQ=/fit-in/200x150/filters:strip_icc()/pic4718279.jpg",
      id: 1,
    },
    {
      name: "Clue",
      year: 2013,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores similique aut natus sed facere quibusdam quis laudantiumasperiores adipisci, molestias sapiente, cum explicabo dolor iureitaque minus. Nihil, a cum.`,
      thumbnail:
        "https://cf.geekdo-images.com/oQYhaJx5Lg3KcGis2reuWQ__thumb/img/3bIZnNfVM1viwH9A9d2Rrip1Y80=/fit-in/200x150/filters:strip_icc()/pic4001505.jpg",
      id: 2,
    },
    {
      name: "Clue",
      year: 2012,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores similique aut natus sed facere quibusdam quis laudantiumasperiores adipisci, molestias sapiente, cum explicabo dolor iureitaque minus. Nihil, a cum.`,
      thumbnail:
        "https://cf.geekdo-images.com/o9-sNXmFS_TLAb7ZlZ4dRA__thumb/img/22MSUC0-ZWgwzhi_VKIbENJik1w=/fit-in/200x150/filters:strip_icc()/pic3211873.jpg",
      id: 3,
    },
  ],
};

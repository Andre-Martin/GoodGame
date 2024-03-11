import type { BggResponse } from "./types";

export const clearText = (text: string): string => {
  const startIndex = text.indexOf("&");
  const endIndex = text.indexOf(";");
  text = text;
  return text;
};

export const getIDs = (start: number, amount: number): string => {
  let result = "";
  for (let i = start; i <= start + amount; i++) {
    result += `${i},`;
  }
  return result.slice(0, result.length - 1);
};

export const parseBoardgameInfo = (
  data: BggResponse[] | any,
  options?: { xmlJs: boolean }
) => {
  const result = [];
  //if we get data parsed by xml-json
  if (options?.xmlJs) {
    for (const item of data) {
      console.log(item);
      const { id, rank } = item._attributes,
        thumbnail = item.thumbnail._attributes.value,
        name = item.name._attributes.value,
        year = item.yearpublished._attributes.value;
      result.push({ id, rank, thumbnail, name, year });
    }
  } else {
    for (const item of data) {
      const {
        id,
        names,
        yearpublished,
        description,
        img,
        thumbnail,
        minplayers,
        maxplayers,
        maxplaytime,
        minplaytime,
      } = item;

      result.push({
        id,
        name: names[0].value,
        year: yearpublished,
        description,
        minplayers,
        maxplayers,
        minplaytime,
        maxplaytime,
        thumbnail,
        img,
      });
    }
  }
  if (result.length > 1) return result;
  else return result[0];
};

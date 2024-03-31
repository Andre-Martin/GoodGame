import { ITEMS_PER_PAGE } from "./constants";

export const getSearchItemsByPage = (page: number, ids: number[]) => {
  const lastItem = page * ITEMS_PER_PAGE;
  return ids.slice(lastItem - ITEMS_PER_PAGE, lastItem);
};

export const clearText = (text?: string): string => {
  if (!text) return "";
  const regex = /&#.*;&#.*;/g;
  const result = text.replaceAll(regex, "");
  return result;
};

export const getIDs = (start: number, amount: number): string => {
  let result = "";
  for (let i = start; i <= start + amount; i++) {
    result += `${i},`;
  }
  return result.slice(0, result.length - 1);
};

export const concatIDs = (arr: number[]): string => {
  return arr.join(",");
};

export const formatIDsFromSearch = (arr: any): number[] => {
  const result = [];
  for (const item of arr) {
    result.push(item.id);
  }
  return result;
};

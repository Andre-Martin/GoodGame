import { ITEMS_PER_PAGE } from "./constants";

export const getSearchItemsByPage = (page: number, ids: number[]) => {
  const lastItem = page * ITEMS_PER_PAGE;
  return ids.slice(lastItem - ITEMS_PER_PAGE, lastItem);
};

export const getYoutubeImgByVideoID = (url: string) => {
  const index = url.indexOf("="),
    videoID = url.substring(index + 1),
    imageURL = `http://img.youtube.com/vi/${videoID}/hqdefault.jpg`;
  return imageURL;
};

export const clearText = (text?: string): string => {
  if (!text) return "";
  const regex = /&#.*;&#.*;/g;
  const result = text.replace(regex, "");
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

interface objectWithId {
  id: string;
}

export const formatIDsFromSearch = (arr: objectWithId[]): number[] => {
  const result = [];
  for (const item of arr) {
    result.push(+item.id);
  }
  return result;
};

export const getRandomID = (): number => {
  return Math.floor(Math.random() * 1000);
};

export const getTimeAgo = (
  postedDate: string | Date,
  currentDate?: Date
): string => {
  const currentDateTime = currentDate ? currentDate : new Date();
  const givenDateTime = new Date(postedDate);
  const timeDifference = currentDateTime.getTime() - givenDateTime.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years >= 1) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months >= 1) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (days >= 1) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours >= 1) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes >= 1) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
};

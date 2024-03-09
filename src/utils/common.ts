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

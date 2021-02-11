export const capitalizeString = (word) =>
  word.charAt(0).toUpperCase() + word.substring(1);

export const capitalizeWord = (word) =>
  word
    .split(" ")
    .map((el) => el.charAt(0).toUpperCase() + el.substring(1))
    .join(" ");

export const trimText = (text, limit = 4) => {
  const words = text.split(" ");

  if (words.length > limit) {
    const textBucket = [];

    words.reduce((acc, cur) => {
      if (acc < limit) {
        textBucket.push(capitalizeString(cur));
      }

      return (acc += 1);
    }, 0);

    return `${textBucket.join(" ")}...`;
  }

  return capitalizeWord(text);
};

export const transformQueryParamsToObject = (queryParamsString) => {
  return queryParamsString
    .substring(1)
    .split('&')
    .reduce((acc, curr) => {
      const [paramName, paramValue] = curr.split('=');
      acc[paramName] = paramValue;

      return acc;
    }, {});
};

export const limitCharacters = (str, maxAmount, addEllipsis = false) => {
  if (str.length <= maxAmount) {
    return str;
  }

  const newLength = addEllipsis ? maxAmount - 3 : maxAmount;

  return `${str.substring(0, newLength)}${addEllipsis ? '...' : ''}`;
};

export const transformSecondsToTimeframe = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60 || 0;
  let hours = null;

  if (minutes > 60) {
    hours = Math.floor(minutes / 60);
    minutes %= 60;
  }

  seconds = minutes > 60 ? minutes % 60 : seconds;

  return `${hours ? `${hours}:` : ''}${
    minutes ? `${`00${minutes}`.substr(-2)}:` : '00:'
  }${`00${seconds}`.substr(-2)}`;
};

export default { transformQueryParamsToObject };

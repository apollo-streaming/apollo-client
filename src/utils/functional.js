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

export default { transformQueryParamsToObject };

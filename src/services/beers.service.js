const API_URL = "https://api.punkapi.com/v2/beers?";

export const getBeers = (searchParams) => {
  return fetch(`${API_URL}${searchParams}`)
    .then((res) => res.json())
    .then((jsonRes) => {
      return jsonRes;
    })
    .catch((error) => console.log(error));
};

const API_URL = "https://api.punkapi.com/v2/beers";

export const getBeers = (searchParams) => {
  return fetch(`${API_URL}?${searchParams}&per_page=48`)
    .then((res) => res.json())
    .then((jsonRes) => {
      return jsonRes;
    })
    .catch((error) => console.log(error));
};

export const Api = () => {
  const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => data.results);
};
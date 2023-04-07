const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.API_KEY!;

export function createNewRequest(url: string) {
  const urlPath = new URL(url, BASE_URL);
  urlPath.searchParams.set("api_key", API_KEY);
  urlPath.searchParams.set("page", "1");

  return urlPath;
}

export function fetchPopularMovies() {
  const requestPath = createNewRequest("movie/popular");

  return requestPath.href;
}

export function fetchUpcomingMovies() {
  const requestPath = createNewRequest("movie/upcoming");

  return requestPath.href;
}

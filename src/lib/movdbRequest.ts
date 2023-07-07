import { Credits, DetailedMovie, Genre, MoviesResponse } from "@/lib/movdbTypes";

const BASE_URL = "https://api.themoviedb.org/3/";
const BEARER_TOKEN = process.env.BEARER_TOKEN;

export const MovieDBRequestHeader = new Headers({
  Authorization: `Bearer ${BEARER_TOKEN}`,
  "Content-Type": "application/json"
});

export function createNewRequest(url: string, page: number = 1) {
  const urlPath = new URL(url, BASE_URL);
  urlPath.searchParams.set("page", page.toString());

  return urlPath;
}

export async function fetchGenresList(): Promise<{ genres: Genre[] }> {
  const request = createNewRequest("genre/movie/list");

  const response = await fetch(request, { headers: MovieDBRequestHeader });
  if (!response.ok) {
    throw new Error("Failed to fetch genres");
  }

  return await response.json();
}

export async function fetchPopularMovies(page: number = 1): Promise<MoviesResponse> {
  const requestPath = createNewRequest("movie/popular", page);

  const response = await fetch(requestPath, { headers: MovieDBRequestHeader });
  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }

  return await response.json();
}

export async function fetchUpcomingMovies(page?: number): Promise<MoviesResponse> {
  const requestPath = createNewRequest("movie/upcoming", page);

  const response = await fetch(requestPath, { headers: MovieDBRequestHeader });
  if (!response.ok) {
    throw new Error("Failed to fetch upcoming movies");
  }

  return await response.json();
}

export async function fetchMoviesByGenre(genre: string, page?: number): Promise<MoviesResponse> {
  const requestPath = createNewRequest("discover/movie", page);
  requestPath.searchParams.set("with_genres", genre);

  const response = await fetch(requestPath, { headers: MovieDBRequestHeader });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${genre} movies`);
  }

  return await response.json();
}

export async function fetchMoviesBySearchQuery(query: string, page?: number): Promise<MoviesResponse> {
  const requestPath = createNewRequest("search/movie", page);
  requestPath.searchParams.set("query", query);

  const response = await fetch(requestPath, { headers: MovieDBRequestHeader });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${query} movies`);
  }

  return await response.json();
}

export async function fetchCastForMovie(movieId: number): Promise<Credits> {
  const requestPath = createNewRequest(`movie/${movieId}/credits`);

  const response = await fetch(requestPath, { headers: MovieDBRequestHeader });
  if (!response.ok) {
    throw new Error(`Failed to fetch credits for movie: ${movieId}`);
  }

  return await response.json();
}

export async function fetchIndividualMovieDetails(movieId: number): Promise<DetailedMovie> {
  const requestPath = createNewRequest(`movie/${movieId}`);

  const response = await fetch(requestPath, { headers: MovieDBRequestHeader });
  if (!response.ok) {
    throw new Error(`Failed to fetch details for movie: ${movieId}`);
  }

  return await response.json();
}

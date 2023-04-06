export default async function MovieDetailsPage(params: {
  params: { id: number };
}) {
  const response = await getIndividualMovieDetails(params.params.id);

  return <div>{JSON.stringify(response)}</div>;
}

async function getIndividualMovieDetails(movieId: number) {
  const path = new URL(`movie/${movieId}`, "https://api.themoviedb.org/3/");
  path.searchParams.set("api_key", process.env.API_KEY!);

  const response = await fetch(path.href);

  return await response.json();
}

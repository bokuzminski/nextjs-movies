export function formatMovieRuntimeToHHMM(runtime: number | null) {
  if (!runtime) return "";
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `${hours}h ${minutes}m`;
}

export function formatMovieReleaseDate(releaseDate: string | null) {
  if (!releaseDate) return "";
  return new Date(releaseDate).toLocaleDateString("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

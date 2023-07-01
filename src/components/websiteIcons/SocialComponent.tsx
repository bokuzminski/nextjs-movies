import { VideoModal } from "@/components/VideoModal/VideoModal";
import { HomepageIcon, IMDBIcon, InstagramIcon, TwitterIcon } from "@/components/websiteIcons/TwitterIcon";
import { createNewRequest } from "@/lib/movdbRequest";
import { DetailedMovie, ExternalLinks, VideosResponse } from "@/lib/movdbTypes";
import style from "./social.module.css";

export default async function SocialComponent({ movieId, homePage }: SocialComponentProps) {
  const { imdb_id, instagram_id, twitter_id } = await fetchExternalIds(movieId);
  const trailer = await fetchTrailer(movieId);

  return (
    <section className={style.socialWrapper}>
      <HomepageIcon homepage={homePage} />
      <IMDBIcon imdbId={imdb_id} />
      <TwitterIcon twitterId={twitter_id} />
      <InstagramIcon instagramId={instagram_id} />
      <VideoModal video={trailer} />
    </section>
  );
}

async function fetchExternalIds(movieId: number) {
  const path = createNewRequest(`movie/${movieId}/external_ids`);
  const req = await fetch(path.href);
  const result: ExternalLinks = await req.json();

  return result;
}
async function fetchTrailer(movieId: number) {
  const path = createNewRequest(`movie/${movieId}/videos`);
  const req = await fetch(path.href);
  const { results }: VideosResponse = await req.json();
  if (!results) return null;
  const foundTrailer = results.find(
    (video) => (video.name === "Official Trailer" || video.type === "Trailer") && video.site === "YouTube"
  );

  return foundTrailer || null;
}

type SocialComponentProps = {
  movieId: DetailedMovie["id"];
  homePage: DetailedMovie["homepage"];
};

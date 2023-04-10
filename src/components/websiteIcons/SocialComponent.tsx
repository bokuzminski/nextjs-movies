import {
  HomepageIcon,
  IMDBIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/components/websiteIcons/TwitterIcon";
import { createNewRequest } from "@/lib/movdbRequest";
import { DetailedMovie, ExternalLinks } from "@/lib/movdbTypes";
import style from "./social.module.css";

export default async function SocialComponent({
  movieId,
  homePage,
}: SocialComponentProps) {
  const { imdb_id, instagram_id, twitter_id } = await fetchExternalIds(movieId);
  console.log(homePage);

  return (
    <section className={style.socialWrapper}>
      <HomepageIcon homepage={homePage} />
      <IMDBIcon imdbId={imdb_id} />
      <TwitterIcon twitterId={twitter_id} />
      <InstagramIcon instagramId={instagram_id} />
    </section>
  );
}

async function fetchExternalIds(movieId: number) {
  const path = createNewRequest(`movie/${movieId}/external_ids`);
  const req = await fetch(path.href);
  const result: ExternalLinks = await req.json();

  return result;
}

type SocialComponentProps = {
  movieId: DetailedMovie["id"];
  homePage: DetailedMovie["homepage"];
};

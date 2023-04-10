import { DetailedMovie, ExternalLinks } from "@/lib/movdbTypes";
import Image from "next/image";
import ImdbLogo from "../../../public/socialMediaIcons/imdb.square.png";
import InstagramLogo from "../../../public/socialMediaIcons/instagram-white.svg";
import HomePageIcon from "../../../public/socialMediaIcons/linkIcon.svg";
import TwitterLogo from "../../../public/socialMediaIcons/twitter-white.svg";
import style from "./social.module.css";

export const HomepageIcon = ({
  homepage,
}: {
  homepage: DetailedMovie["homepage"];
}) => {
  if (!homepage) return null;

  return (
    <a
      target="_blank"
      href={homepage}
      rel="noopener noreferrer"
      className={style.socialItem}
    >
      <Image src={HomePageIcon} width={40} height={40} alt="Home Page" />
    </a>
  );
};

export const TwitterIcon = ({
  twitterId,
}: {
  twitterId: ExternalLinks["twitter_id"];
}) => {
  if (!twitterId) return null;

  return (
    <a
      target="_blank"
      href={`https://www.twitter.com/${twitterId}`}
      rel="noopener noreferrer"
      className={style.socialItem}
    >
      <Image src={TwitterLogo} width={40} height={40} alt="Twitter" />
    </a>
  );
};

export const IMDBIcon = ({ imdbId }: { imdbId: ExternalLinks["imdb_id"] }) => {
  if (!imdbId) return null;

  return (
    <a
      target="_blank"
      href={`https://www.imdb.com/title/${imdbId}`}
      rel="noopener noreferrer"
      className={style.socialItem}
    >
      <Image src={ImdbLogo} width={40} height={40} alt="IMDb" />
    </a>
  );
};

export const InstagramIcon = ({
  instagramId,
}: {
  instagramId: ExternalLinks["instagram_id"];
}) => {
  if (!instagramId) return null;

  return (
    <a
      target="_blank"
      href={`https://www.instagram.com/${instagramId}`}
      rel="noopener noreferrer"
      className={style.socialItem}
    >
      <Image src={InstagramLogo} width={40} height={40} alt="Instagram" />
    </a>
  );
};

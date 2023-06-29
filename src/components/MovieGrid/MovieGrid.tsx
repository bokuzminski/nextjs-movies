import { MovieGridItem } from "@/components/MovieGrid/components/MovieGridItem";
import { BasicMovie, MoviesResponse } from "@/lib/movdbTypes";
import { NextPage } from "next";
import gridStyle from "./page.module.css";

export const MovieGrid: NextPage<MovieGridProps> = ({ movies, title = "" }) => {
  return (
    <section className={gridStyle.gridSection}>
      <div className={gridStyle.gridContainerWrapper}>
        <div className={gridStyle.gridInnerWrapper}>
          <div className={gridStyle.pageTitleContainer}>
            <h1 className={gridStyle.pageTitle}>{title}</h1>
            <h2 className={gridStyle.pageSubtitle}>MOVIES</h2>
          </div>
          <div className={gridStyle.gridContainer}>{movies.map(mapMoviesIntoView)}</div>
        </div>
      </div>
    </section>
  );

  function mapMoviesIntoView(movie: BasicMovie) {
    return <MovieGridItem key={movie.id} movie={movie} />;
  }
};

type MovieGridProps = { movies: MoviesResponse["results"]; title?: string };

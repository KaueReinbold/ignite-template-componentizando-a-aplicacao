import './styles.scss';

import { MovieCard } from '../MovieCard';
import { useWatchMe } from '../../hooks/useWatchMe';
import { Header } from '../Header';

export function Content() {
  const { movies } = useWatchMe();

  return (
    <div className='container'>
      <Header />

      <main>
        <div className='movies-list'>
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

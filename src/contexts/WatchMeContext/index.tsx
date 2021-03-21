import { createContext, ReactNode, useEffect, useState } from 'react';
import { GenreResponseProps } from '../../models/GenreResponseProps';
import { MovieProps } from '../../models/MovieProps';
import { api } from '../../services/api';

type WatchMeContextProps = {
  genres: GenreResponseProps[];
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
  selectedGenreId: number;
  setSelectedGenreId: (genreId: number) => void;
};

type WatchMeContextProviderProps = {
  children: ReactNode;
};

export const WatchMeContext = createContext<WatchMeContextProps>(
  {} as WatchMeContextProps
);

export function WatchMeContextProvider({
  children,
}: WatchMeContextProviderProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then((response) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });

    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  return (
    <WatchMeContext.Provider
      value={
        {
          genres,
          selectedGenre,
          movies,
          selectedGenreId,
          setSelectedGenreId,
        } as WatchMeContextProps
      }
    >
      {children}
    </WatchMeContext.Provider>
  );
}

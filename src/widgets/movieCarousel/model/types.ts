export interface MoviePreview {
  id: number;
  name: string;
  year: number;
  shortDescription: string;
  rating: {
    kp: number;
    imdb: number;
    tmdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  logo: {
    url: string;
  };
  poster: {
    url: string;
    previewUrl: string;
  };
  backdrop: {
    url: string;
    previewUrl: string;
  };
  genres: [
    {
      name: string;
    }
  ];
}


export interface ListOfMovies {
  docs: Array<MoviePreview>;
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface MoviePages {
  pages: Array<ListOfMovies>;
  currentPage: number;
  status: string;
}

export type URL = string;

export interface Options {
  method: string;
  headers: {
    accept: string;
    "X-API-KEY": string;
  };
}

export type value = string | number;

export interface CounterState {
  value: number;
}

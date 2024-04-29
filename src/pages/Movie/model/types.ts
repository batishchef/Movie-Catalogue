type name = {
  name: string;
  language: string;
  type: string;
};

type trailer = {
  url: string;
  name: string;
  site: string;
  type: string;
  size: number;
};

type teaser = {
  url: string;
  name: string;
  site: string;
  type: string;
  size: number;
};

type genre = {
  name: string;
};

type country = {
  name: string;
};

type person = {
  id: number;
  photo: string;
  name: string;
  enName: string;
  description: string;
  profession: string;
  enProfession: string;
};

type seasonInfo = {
  number: number;
  episodesCount: number;
};

type watchabilityItem = {
  name: string;
  logo: {
    url: string;
  };
  url: string;
};

type similarMovie = {
  id: number;
  rating: {
    kp: number;
    imdb: number;
    tmdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  year: number;
  name: string;
  enName: string;
  alternativeName: string;
  type: string;
  poster: {
    url: string;
    previewUrl: string;
  };
};

type sequelOrPrequel = {
  id: number;
  rating: {
    kp: number;
    imdb: number;
    tmdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  year: number;
  name: string;
  enName: string;
  alternativeName: string;
  type: string;
  poster: {
    url: string;
    previewUrl: string;
  };
};

type releaseYear = {
  start: number;
  end: number;
};

type audience = {
  count: number;
  country: string;
};

type network = {
  items: [
    {
      name: string;
      logo: {
        url: string;
      };
    }
  ];
};

type fact = {
  value: string;
  type: string;
  spoiler: boolean;
};

export interface MovieInfo {
  id: 666;
  externalId: {
    kpHD: string;
    imdb: string;
    tmdb: number;
  };
  name: string;
  alternativeName: string;
  enName: string;
  names: Array<name>;
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string;
  slogan: string;
  status: string;
  rating: {
    kp: number;
    imdb: number;
    tmdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  votes: {
    kp: number;
    imdb: number;
    tmdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  movieLength: number;
  ratingMpaa: string;
  ageRating: number;
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
  videos: {
    trailers: Array<trailer>;
    teasers: Array<teaser>;
  };
  genres: Array<genre>;
  countries: Array<country>;
  persons: Array<person>;
  reviewInfo: {
    count: number;
    positiveCount: number;
    percentage: string;
  };
  seasonsInfo: Array<seasonInfo>;
  budget: {
    value: number;
    currency: string;
  };
  fees: {
    world: {
      value: number;
      currency: string;
    };
    russia: {
      value: number;
      currency: string;
    };
    usa: {
      value: number;
      currency: string;
    };
  };
  premiere: {
    country: string;
    world: string;
    russia: string;
    digital: string;
    cinema: string;
    bluray: string;
    dvd: string;
  };
  similarMovies: Array<similarMovie>;
  sequelsAndPrequels: Array<sequelOrPrequel>;
  watchability: {
    items: Array<watchabilityItem>;
  };
  releaseYears: Array<releaseYear>;
  top10: number;
  top250: number;
  ticketsOnSale: boolean;
  totalSeriesLength: number;
  seriesLength: number;
  isSeries: boolean;
  audience: Array<audience>;
  lists: Array<string>;
  networks: Array<network>;
  updatedAt: string;
  createdAt: string;
  facts: Array<fact>;
  imagesInfo: {
    postersCount: number;
    backdropsCount: number;
    framesCount: number;
  };
}

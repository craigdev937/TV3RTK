export interface MC {
    id: number,
    title: string,
    posterPath: string,
    voteAverage: number,
    releaseDate: string,
    type: "movie" | "tv"
};

export interface IMov {
    adult: boolean,
    backdrop_path: string,
    id: number,
    title: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    original_language: string,
    genre_ids: number[],
    popularity: number,
    release_date: string,
    softcore: boolean,
    video: boolean,
    vote_average: number,
    vote_count: number
};

export interface ITrendMov {
    page: number,
    total_pages: number,
    total_results: number,
    results: IMov[]
};

export interface ITV {
    adult: boolean,
    backdrop_path: string,
    id: number,
    name: string,
    original_name: string,
    overview: string,
    poster_path: string,
    media_type: string,
    original_language: string,
    genre_ids: number[],
    popularity: number,
    first_air_date: string,
    softcore: boolean,
    vote_average: number,
    vote_count: number,
    origin_country: string[]
};

export interface ITrendTV {
    page: number,
    total_pages: number,
    total_results: number,
    results: ITV[]
};

export interface IMulti {
    page: number,
    total_pages: number,
    total_results: number,
    results: (IMov | ITV)[]
};

export interface ITrendAll {
    page: number,
    total_pages: number,
    total_results: number,
    results: (IMov | ITV)[]
};

export interface ITVDetail {
    id: number,
    name: string,
    overview: string,
    popularity: number,
    backdrop_path: string,
    poster_path: string,
    tagline: string,
    vote_average: number,
    first_air_date: string,
    number_of_seasons: number,
    number_of_episodes: number,
    genres: [{
        id: number,
        name: string
    }],
    homepage: string,
    credits: {
        cast: [{
            id: number,
            name: string,
            gender: number,
            character: string,
            popularity: number,
            profile_path: string,
        }]
    }
};






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
    budget: number,
    genre_ids: number[],
    homepage: string,
    id: number,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    revenue: number,
    runtime: number,
    title: string,
    vote_average: number,
    vote_count: number,
    credits: {
        cast: [{
            adult: boolean,
            gender: number,
            id: number,
            known_for_department: string,
            name: string,
            original_name: string,
            popularity: number,
            profile_path: string,
            cast_id: number,
            character: string,
            credit_id: string,
            order: number
        }]
    }
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
    homepage: string,
    id: number,
    last_air_date: string,
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
    origin_country: string[],
    credits: {
        cast: [{
            adult: boolean,
            gender: number,
            id: number,
            known_for_department: string,
            name: string,
            original_name: string,
            popularity: number,
            profile_path: string,
            character: string,
            credit_id: string,
            order: number
        }]
    }
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

export interface ITVTrailer {
    id: number,
    results: [{
        iso_639_1: string,
        iso_3166_1: string,
        name: string,
        key: string,
        site: string,
        size: number,
        type: string,
        official: boolean,
        id: string,
        published_at: string
    }]
};

export interface IMovTrailer {
    id: number,
    results: [{
        iso_639_1: string,
        iso_3166_1: string,
        name: string,
        key: string,
        site: string,
        size: number,
        type: string,
        official: boolean,
        id: string,
        published_at: string
    }]
};

export interface IActor {
    adult: boolean,
    also_known_as: string[],
    biography: string,
    birthday: string,
    deathday: string,
    gender: number,
    homepage: string,
    id: number,
    imdb_id: string,
    known_for_department: string,
    name: string,
    place_of_birth: string,
    popularity: number,
    profile_path: string,
    credits: {
        cast: [{
            backdrop_path: string,
            genre_ids: number[],
            id: number,
            title: string,
            overview: string,
            popularity: number,
            poster_path: string,
            release_date: string,
            character: string,
        }]
    }
};

export interface IPeople {
    adult: boolean,
    id: number,
    name: string,
    original_name: string,
    media_type: string,
    popularity: number,
    gender: number,
    known_for_department: string,
    profile_path: string
};

export interface ITrendPeople {
    page: number,
    total_pages: number,
    total_results: number,
    results: IPeople[]
};

export interface IFav {
    fav: (ITV | IMov | IPeople)[]
};

export type TTheme = "light" | "dark";

export interface ITheme {
    mode: TTheme
};






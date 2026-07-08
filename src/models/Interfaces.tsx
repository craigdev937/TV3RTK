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
        }],
        crew: [{
            adult: boolean,
            gender: number,
            id: number,
            known_for_department: string,
            name: string,
            original_name: string,
            popularity: number,
            profile_path: string,
            credit_id: string,
            department: string,
            job: string
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


type FavItem = ITV | IMov | IPeople;



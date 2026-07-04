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





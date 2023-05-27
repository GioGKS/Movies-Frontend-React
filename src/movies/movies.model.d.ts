//D - stands for type definition file

export interface movieDTO{
    id: number;
    title: string;
    poster: string;
}

export interface landingPageDTO {
    inTheaters?: movieDTO[];
    upcomingreleases?: movieDTO[];
}
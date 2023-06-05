//D - stands for type definition file

export interface movieDTO{
    id: number;
    title: string;
    poster: string;
}

export interface movieCreationDTO {
    title: string;
    inTheaters: boolean;
    trailer: string;
    releaseDate?: Date;
    poster?: File;
    posterURL?: string;


}

export interface landingPageDTO {
    inTheaters?: movieDTO[];
    upcomingreleases?: movieDTO[];
}
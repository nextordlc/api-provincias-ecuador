export interface Provinces {
    id:number;
    provincia:string;
}

export interface Cantons {
    id:number;
    canton:string;
    id_provincia:number;
}

export interface Parishes {
    id:number;
    parroquia:string;
    id_canton:number;
}
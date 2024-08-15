import { region } from "./byregion.type";
import { Country } from "./country.interface";

export interface CacheStore{

    bycapital: TermCountries;
    bycountries: TermCountries;
    byRegion: RegionCountries;
}

export interface TermCountries{

    term: string;
    countries: Country[];
}

export interface RegionCountries{
    region?: region;
    countries: Country[];
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  private URL_API_PAISES:string='https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {

   }


   buscarCountryAlphaCode(termino :string) :Observable<Country | null>{

    const url=`${this.URL_API_PAISES}/alpha/${termino}`;
    return this.httpClient.get<Country[]>(url)
            .pipe(
                map(countries=>countries.length>0 ? countries[0]:null ),
                catchError( (error)=>{
                  return of(null)
                })
            );

   }


   buscarxCapital(termino:string):Observable<Country[]>{

    //El of([]) retornar un observable con un arreglo vacio
      const url=`${this.URL_API_PAISES}/capital/${termino}`;
      return this.httpClient.get<Country[]>(url)
            .pipe(
                catchError( (error)=>{
                  return of([])
                })

            );
   }

   buscarXPais(pais:string):Observable<Country[]>{
     const url=`${this.URL_API_PAISES}/name/${pais}`;
     return this.httpClient.get<Country[]>(url)
            .pipe(
              catchError(() => of([]))
            );
   }

   buscarxRegion(region:string):Observable<Country[]>{
    const url=`${this.URL_API_PAISES}/region/${region}`;

    return this.httpClient.get<Country[]>(url)
            .pipe(
              catchError((error)=>of([]))
            );

   }



}

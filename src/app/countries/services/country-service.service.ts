import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cacheStores.interface';
import { region } from '../interfaces/byregion.type';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  private URL_API_PAISES:string='https://restcountries.com/v3.1';
  
  public cacheStore: CacheStore={
    bycapital: {term:'',countries:[]},
    bycountries: {term:'',countries:[]},
    byRegion: {countries:[]}
  }

  constructor(private httpClient: HttpClient) {

    this.obtenerLocalStorage();
   }

       //El of([]) retornar un observable con un arreglo vacio

   buscarCountriesRequest(url :string) :Observable<Country[]>{

    return this.httpClient.get<Country[]>(url)
          .pipe(
              catchError( (error)=>{
                return of([])
              }),
              //delay(2000),
          );
   }

   private saveToLocalStorage():void{
    localStorage.setItem('cahestorage',JSON.stringify(this.cacheStore));
   }

   private obtenerLocalStorage():void{

    if(!localStorage.getItem("cahestorage")) return; 
    this.cacheStore=JSON.parse(localStorage.getItem("cahestorage")!);
  
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
      const url=`${this.URL_API_PAISES}/capital/${termino}`;
      return this.buscarCountriesRequest(url)
                .pipe(
                  tap (countries=> this.cacheStore.bycapital={  term: termino, countries:countries} ),
                  tap(()=>this.saveToLocalStorage()) 
                );
   }

   buscarXPais(pais:string):Observable<Country[]>{
     const url=`${this.URL_API_PAISES}/name/${pais}`;
     return this.buscarCountriesRequest(url)
              .pipe(
                tap (countries=> this.cacheStore.bycountries={  term: pais, countries:countries} ),
                tap(()=>this.saveToLocalStorage())  
              );
   }

   buscarxRegion(region:region):Observable<Country[]>{
    const url=`${this.URL_API_PAISES}/region/${region}`;
    return this.buscarCountriesRequest(url)
                .pipe(
                  tap (countries=> this.cacheStore.byRegion={  region: region , countries:countries} ),
                  tap(()=>this.saveToLocalStorage())  
                );
   }



}

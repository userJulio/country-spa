import { Component, OnDestroy, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryServiceService } from '../../services/country-service.service';


@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit  {

  tituloPlaceholder:string='Por capital';
  public countries:Country[]=[];
  public isLoading:boolean=false;
  public initialValue:string='';

  constructor(private countriesservice:CountryServiceService){

  }
  ngOnInit(): void {
    this.countries=this.countriesservice.cacheStore.bycapital.countries;
    this.initialValue=this.countriesservice.cacheStore.bycapital.term;
  }


  onsearchBox(valordelSearchBox:string):void{
    this.isLoading=true;
  
   this.countriesservice.buscarxCapital(valordelSearchBox)
        .subscribe(countries=>{
            this.countries=countries;
            this.isLoading=false;
        })
  }




}

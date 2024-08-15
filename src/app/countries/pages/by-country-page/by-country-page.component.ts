import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from '../../services/country-service.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {

  tituloPlaceholder:string="Por pais";
  valueInitial:string='';

public paises:Country[]=[];

    constructor(private countriservice:CountryServiceService){

    }
  ngOnInit(): void {
   this.paises=this.countriservice.cacheStore.bycountries.countries;
    this.valueInitial=this.countriservice.cacheStore.bycountries.term;
  }


  onsearchBox(pais:string):void{

     this.countriservice.buscarXPais(pais)
      .subscribe(paises=>{
        this.paises=paises;
      });
  }

}

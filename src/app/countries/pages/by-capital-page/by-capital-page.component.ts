import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryServiceService } from '../../services/country-service.service';


@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  tituloPlaceholder:string='Por capital';
  public countries:Country[]=[];

  constructor(private countriesservice:CountryServiceService){

  }

  onsearchBox(valordelSearchBox:string):void{
    
   this.countriesservice.buscarxCapital(valordelSearchBox)
        .subscribe(countries=>{
            this.countries=countries;
        })

  }



}

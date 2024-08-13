import { Component } from '@angular/core';
import { CountryServiceService } from '../../services/country-service.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  tituloPlaceholder:string="Por pais";

public paises:Country[]=[];

    constructor(private countriservice:CountryServiceService){

    }


  onsearchBox(pais:string):void{

     this.countriservice.buscarXPais(pais)
      .subscribe(paises=>{
        this.paises=paises;
      });
  }

}

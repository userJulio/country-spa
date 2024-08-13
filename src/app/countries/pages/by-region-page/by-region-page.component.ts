import { Component } from '@angular/core';
import { CountryServiceService } from '../../services/country-service.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  tituloPlaceholder:string="Por region";
  regiones:Country[]=[];

  constructor(private countrieservice:CountryServiceService){

  }

  onsearchBox(region:string):void{

    this.countrieservice.buscarxRegion(region)
            .subscribe((region)=>{
              this.regiones=region;
            });

  }


}

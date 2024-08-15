import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from '../../services/country-service.service';
import { Country } from '../../interfaces/country.interface';
import { region } from '../../interfaces/byregion.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {

  tituloPlaceholder:string="Por region";
  regiones:Country[]=[];
  public listregion:region[]=[ "America" , "Asia" ,"Africa" , "Oceania" ,"Europe" , "Antarctica"];
  public selectRegion?:region;


  constructor(private countrieservice:CountryServiceService){

  }
  ngOnInit(): void {
    this.regiones=this.countrieservice.cacheStore.byRegion.countries;
    this.selectRegion=this.countrieservice.cacheStore.byRegion.region;

  }

  onsearchBox(region:region):void{

    this.selectRegion=region;
    this.countrieservice.buscarxRegion(region)
            .subscribe((region)=>{
              this.regiones=region;
            });

  }


}

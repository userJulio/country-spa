import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryServiceService } from '../../services/country-service.service';
import { switchMap } from 'rxjs';
import { Country, NativeName } from '../../interfaces/country.interface';


@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: `
  img.img-bandera{
    width:200px;
    height:140px;
  }
  `
})
export class CountryPageComponent implements OnInit {



  public country?:Country;

  constructor( private router:Router, private activeroute:ActivatedRoute,
    private countriesevice:CountryServiceService){

  }
//switchMap : Devuele un Observable 

  ngOnInit(): void {
    
    this.activeroute.params
      .pipe(
          switchMap( ({id})=>this.countriesevice.buscarCountryAlphaCode(id)  ),
      )
      .subscribe(
          (country)=>{
            if(!country){
             return  this.router.navigateByUrl('countries/by-country');
            }
              this.country=country;
            console.log("tenemos un pais");
            return this.country;
          }
      );
  }

}

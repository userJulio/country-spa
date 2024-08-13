import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-tablepais',
  templateUrl: './tablepais.component.html',
  styleUrl: './tablepais.component.css'
})
export class TablepaisComponent {

  @Input()
  public countries:Country[]=[];
}

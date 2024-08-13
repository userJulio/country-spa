import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {



  @Input()
  public placeholder:string='';

  @Output()
  public busquedOutput:EventEmitter<string>=new EventEmitter();

@ViewChild("txtInputBusqueda")
public  inputBusqueda!:ElementRef<HTMLInputElement>;

constructor(){

}


  buscarElemento():void{
   const valorBusqueda=this.inputBusqueda.nativeElement.value;
   this.busquedOutput.emit(valorBusqueda);
  }

}

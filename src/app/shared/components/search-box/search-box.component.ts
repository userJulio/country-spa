import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, viewChild } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy {

//El subject es un tipo especial de Observable
/*
siempre que se crea un subscribe se tiene que destruir para que no se llene la memoria 
a excepcion  de los metodos hhtp.get,post,delete del httpClient
*/

  private debuncer:Subject<string>=new Subject<string>();

  private debuncerSubscription?:Subscription;

  @Input()
  public placeholder:string='';

  @Output()
  public busquedOutput:EventEmitter<string>=new EventEmitter();

@ViewChild("txtInputBusqueda")
public  inputBusqueda!:ElementRef<HTMLInputElement>;

@Output() public onDebuence= new EventEmitter<string>();

@Input() public initialValueSearch:string='';

constructor(){

}

  ngOnInit(): void {

    //Hasta que el  this.debuncer deje de emitir un valor
  this.debuncerSubscription=  this.debuncer
    .pipe(
      debounceTime(500)
    )
    .subscribe(value=>{
      this.onDebuence.emit(value);
      console.log("debounce value: ",value);
    })
  }
  ngOnDestroy(): void {
    this.debuncerSubscription?.unsubscribe();
  }


  buscarElemento():void{
   const valorBusqueda=this.inputBusqueda.nativeElement.value;
   this.busquedOutput.emit(valorBusqueda);
  }
  onkeyPress(termino:string):void{

    const valorBusqueda=this.inputBusqueda.nativeElement.value;
this.debuncer.next(termino);

  }

}

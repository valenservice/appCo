import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ProgressComponent } from 'src/app/pages/progress/progress.component';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress') txtProgress: ElementRef;


  constructor() {
    //console.log('leyenda', this.leyenda);
    //console.log('progreso', this.progreso);
   }

  ngOnInit() {
    //console.log('leyenda', this.leyenda);
    //console.log('progreso', this.progreso);
  }

  onChanges(newValue: number){

    
    //let elemHTML: any = document.getElementsByName('progreso')[0];
    //console.log(elemHTML.value);
    //console.log(this.txtProgress);

    if(newValue >= 100){
      this.progreso = 100;
    }else if(newValue < 0){
      this.progreso = 0;
    }else{
      this.progreso = newValue;
    }

    //elemHTML.value = Number(this.progreso);
    this.txtProgress.nativeElement.value=this.progreso;
    this.cambioValor.emit( this.progreso );

  }

  

  cambiarValor(valor: number){

    if ( this.progreso > 100 && valor > 0){
      this.progreso = 100;
      return;
    }

    if ( this.progreso <= 0 && valor < 0 ){
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;

    this.cambioValor.emit( this.progreso );

    this.txtProgress.nativeElement.focus();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 

     

     this.contarTres().then(
      //() => console.log('Termino!')            
      mensaje => console.log('Termino!', mensaje)            
    )
    .catch(error => console.error('Error en al promesa', error));

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    
    return new Promise( (resolve, reject) => {
        
      let contador = 0;

      let intervalo = setInterval(()=>{
        contador += 1;
        console.log(contador);
        if(contador === 3){
         resolve( true );
          //reject('Forzando un error')
          clearInterval(intervalo);
        }
      }, 1000);

    });
    
  }

}

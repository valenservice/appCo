import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() { 
      
  // this.regresaObservable().pipe(
  //   retry(2)
  // )
  this.subscription = this.regresaObservable()
  .subscribe(
    numero => console.log('Subs', numero),
    error => console.error('Error en el obs', error),
    () => console.log('El observador termino!')
  );

}


  ngOnInit() {
  }

 ngOnDestroy(){
   console.log('page closed')
   this.subscription.unsubscribe();
 }

  regresaObservable(): Observable<any> {
    
    return new Observable( (observer: Subscriber<any>) => {

      let contador = 0;

      let intervalo = setInterval( () => {

        contador ++;

        const salida = {
          valor: contador
        };

        observer.next( salida );

        // if(contador === 3){
        //   clearInterval( intervalo );
        //   observer.complete();
        // }
        
        // if(contador === 2){
        //   //clearInterval( intervalo );
        //   observer.error('Problemas!!!!!')
        // }

      }, 1000);

  }).pipe(
    map( resp => resp.valor),
    filter( (valorRsp, index) => {
      //console.log('Filter', valorRsp, index);
      if ((valorRsp % 2) === 1){
        //impar
        return true;
      }else{
        //par
        return false;
      }       
    })
  );
  
  }

}

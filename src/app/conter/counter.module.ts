import { CounterComponent } from './components/counter/Counter.component';
import { NgModule } from '@angular/core';



@NgModule({
  declarations:[
    CounterComponent
  ],
  exports:[ //asi indicamos al mundo exterior que se puede consumir este modulo
    CounterComponent
  ]

})
export class CounterModules{}

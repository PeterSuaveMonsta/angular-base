import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CounterModules } from './conter/counter.module';
import { HerosModule } from './heroes/Heros.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModules,
    HerosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

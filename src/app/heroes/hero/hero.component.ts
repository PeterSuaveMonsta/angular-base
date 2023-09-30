import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Peter Parker';
  public alter:string = 'Spiderman';
  public age: number = 45;

  get capitalizadName():string{
    return 'hola mundo'.toUpperCase();
  }

  getHeroDesciption():string{
    return `${this.name}-${this.age}`;
  }

  changeHero():void{
    this.alter = this.alter.toUpperCase();
  }

  changeAge(age:number):number{
    return this.age=age;
  }

  ResetForm():void{
    this.alter='Spiderman';
    this.age = 45;
  }
}

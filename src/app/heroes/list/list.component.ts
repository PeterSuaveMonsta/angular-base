import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spideman','Iroman','Hulk','She Hulk', 'Thor'];
  public deletedHero?:String;

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Superman', 'Ironman', 'Hulk', 'Thor', 'Batman'];
  public deletedHero?: string;

  removeLastHero() {
    this.deletedHero = this.heroNames.pop();

  }

}

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero';
import { HEROES } from '../mock-data/mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  heroes: Hero[] = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  ngOnInit(): void {
  }

}

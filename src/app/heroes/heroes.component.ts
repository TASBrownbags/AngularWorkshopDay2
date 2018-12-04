import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { PowerLevel } from '../powerLevel';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  constructor(private demoService: DemoService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.demoService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}

import { Component } from '@angular/core';
import { Hero } from '../../../interfaces/hero';
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[] = [];

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}

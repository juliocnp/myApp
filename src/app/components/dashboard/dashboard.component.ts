import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero/hero.service';
import { Hero } from 'src/interfaces/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroServices: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroServices.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}

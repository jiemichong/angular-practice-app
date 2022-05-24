import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes() : Observable<Hero[]> {
    const heroes = of(HEROES) //returns an observable Hero that emits a single value: array of mock heroes
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}

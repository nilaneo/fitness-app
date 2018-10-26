import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  MealsService,
  Meal
} from '../../../shared/services/meals/meals.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from 'store';

@Component({
  selector: 'meal',
  styleUrls: ['meal.component.scss'],
  template: `
    <div class="">
      I am a meal
    </div>
  `
})
export class MealComponent implements OnInit, OnDestroy {
  constructor(private mealsService: MealsService, private store: Store) {}

  ngOnInit() {}

  ngOnDestroy() {}
}

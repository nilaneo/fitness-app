import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  FormArray,
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'meal-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['meal-form.component.html'],
  template: `
    <div class="meal-form">
      <form formGroup="form">
        <div class="meal-form__name">
          <label>
            <h3>Meal name</h3>
            <input
              type="text"
              placeholder="e.g. English Breakfast"
              formControlName="name">
          </label>
        </div>
        <div class="meal-form__food">
          <div class="meal-form__subtitle">
            <h3>Food</h3>
          </div>
          <button
            type="button"
            class="meal-form__add">
            <img src="/img/add-white.svg">
            Add food
          </button>
        </div>
        <div class="meal-form__submit">
          <div>
            <button
              type="button"
              class="button"
              (click)="createMeal()">
              Create meal
            </button>
            <a
              class="button button--cancel"
              [routerLink]="['../']">
              Cancel
            </a>
          </div>
        </div>
      </form>
    </div>
  `
})
export class MealFormComponent {
  constructor() {}

  createMeal() {}
}

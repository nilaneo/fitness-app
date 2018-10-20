import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-form',
  styleUrls: ['auth-form.component.scss'],
  template: `
    <div class="auth-form">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">

        <ng-content select="h1"></ng-content>

        <label>
          <input type="email"
          placeholder="Email address"
          formControlName="email">
        </label>
        <label>
          <input
            type="password"
            placeholder="Enter password"
            formControlName="password">
        </label>

        <ng-content select=".error"></ng-content>

        <div class="auth-form__action">
          <ng-content select="button"></ng-content>
        </div>

        <div class="auth-form__toggle">
          <ng-content select="a"></ng-content>
        </div>
      </form>
    </div>
  `
})
export class AuthFormComponent implements OnInit {
  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}

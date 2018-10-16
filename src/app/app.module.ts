import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

import { AuthModule } from '../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule],
  declarations: [AppComponent],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
var config = {
  apiKey: "AIzaSyC5FJtcnR8-OXOBDjujnve6ZxEhYTUj7ZU",
  authDomain: "fitness-app-515ba.firebaseapp.com",
  databaseURL: "https://fitness-app-515ba.firebaseio.com",
  projectId: "fitness-app-515ba",
  storageBucket: "fitness-app-515ba.appspot.com",
  messagingSenderId: "590260932702"
};
*/

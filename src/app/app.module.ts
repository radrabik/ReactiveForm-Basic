import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Reactive forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, LoginReactiveComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

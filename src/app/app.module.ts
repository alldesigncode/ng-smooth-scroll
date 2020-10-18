import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmoothScrollDirective } from './smooth-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    SmoothScrollDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {Howl, Howler} from 'howler';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

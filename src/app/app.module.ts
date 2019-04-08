import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {Howl, Howler} from 'howler';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

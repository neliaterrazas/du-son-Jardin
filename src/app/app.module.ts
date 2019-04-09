import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



// import {Howl, Howler} from 'howler';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';



// import anime from 'lib/anime.es.js';
import { routing } from './app.routing';
import { KeysComponent } from './keys/keys.component';
import { PaperCanvasComponent } from './paper-canvas/paper-canvas.component';
import { AnimationsComponent } from './animations/animations.component';



@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    KeysComponent,
    PaperCanvasComponent,
    AnimationsComponent

  ],
  imports: [
  
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

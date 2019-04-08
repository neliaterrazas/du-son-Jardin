import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {Howl, Howler} from 'howler';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';




import { routing } from './app.routing';
import { KeysComponent } from './keys/keys.component';
import { PaperCanvasComponent } from './paper-canvas/paper-canvas.component';



@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    KeysComponent,
    PaperCanvasComponent

  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

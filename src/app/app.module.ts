import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {Howl, Howler} from 'howler';
import { AppComponent } from './app.component';
import { RasterComponent } from './raster/raster.component';
import { Flower1Component } from './flower1/flower1.component';


@NgModule({
  declarations: [
    AppComponent,
    RasterComponent,
    Flower1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

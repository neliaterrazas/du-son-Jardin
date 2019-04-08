import { Component } from '@angular/core';
import { Howl } from 'howler'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor() {

    // var sound = new Howl({
    //   src: ['http://server8.mp3quran.net/ahmad_huth/001.mp3'],
    //   html5 :true
    // });
    var keyData = {
      q: {
        sound: new Howl({
          src: ['http://server8.mp3quran.net/ahmad_huth/001.mp3']
        }),
        // color: '#1abc9c'
      }
    }
    document.onkeydown = function(event) {
      if(keyData[event.key]) {
        keyData[event.key].sound.play();
      }
    }
    // sound.play();
  }
}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],

})
export class AnimationsComponent implements OnInit {
  currentState = 'initial';

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
  constructor() { }


  ngOnInit() {
  }

}

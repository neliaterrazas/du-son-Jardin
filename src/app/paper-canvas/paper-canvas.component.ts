import { Component, ViewChild,  OnInit, ElementRef} from '@angular/core';
import { PaperScope, Project, Path, Point } from 'paper';

@Component({
  selector: 'app-paper-canvas',
  templateUrl: './paper-canvas.component.html',
  styleUrls: ['./paper-canvas.component.scss']
})
export class PaperCanvasComponent implements OnInit {
  @ViewChild('canvasElement') canvasElement: ElementRef;
  scope: PaperScope;
  project: Project;

  constructor() { }

  ngOnInit() {
    this.scope = new PaperScope();
    this.project = new Project(this.canvasElement.nativeElement);
  }

}

import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-comp',
  templateUrl: './game-comp.component.html',
  styleUrls: ['./game-comp.component.css']
})
export class GameComponent implements AfterViewInit {

  context: CanvasRenderingContext2D;
  @ViewChild('myCanvas') myCanvas;

  constructor() { }

  ngAfterViewInit() {
    const canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');
    this.draw();
  }

  draw() {
    const ctx = this.context;
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 200, 200);

  }
}

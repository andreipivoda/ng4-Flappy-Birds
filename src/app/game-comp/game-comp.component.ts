import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-game-comp',
  templateUrl: './game-comp.component.html',
  styleUrls: ['./game-comp.component.css']
})
export class GameComponent implements AfterViewInit, OnInit {

  context: CanvasRenderingContext2D;
  @ViewChild('myCanvas') myCanvas;

  xPos = 100;
  yPos = 100;
  GRAVITY = 10;
  ACCELERATION = 2;
  interval;
  once = true;

  constructor() { }

  ngAfterViewInit() {
    const canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');
    this.draw(this.context, this.xPos, this.yPos);
  }
  ngOnInit() {
    this.interval = setInterval(() => {
      this.yPos += this.GRAVITY / this.ACCELERATION;

      this.clearScreen();
      this.draw(this.context, this.xPos, this.yPos);
      this.GRAVITY += 6;
    }, 60);

  }
  draw(ctx: CanvasRenderingContext2D, xPos, yPos) {

    const img = new Image();
    img.src = '../../assets/bird1.png';

    img.onload = function () {

      ctx.drawImage(img, xPos, yPos, 50, 50);

    };


    if (yPos > 600 && this.once) { console.log((this.interval)); this.once = false;; }

  }
  onClick() {
    this.yPos -= 20;
    this.GRAVITY = -30;
    this.clearScreen();
    this.draw(this.context, this.xPos, this.yPos);

  }
  clearScreen() {
    this.context.fillStyle = 'blue';
    this.context.clearRect(0, 0, 800, 600);
    this.context.fillRect(0, 0, 1200, 600);
  }

}

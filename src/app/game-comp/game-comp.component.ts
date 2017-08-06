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
  accel = 10;


  constructor() { }

  ngAfterViewInit() {
    const canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');
    this.draw(this.context, this.xPos, this.yPos);
  }
  ngOnInit() {
    const interval = setInterval(() => {
      this.yPos += this.accel / 2;

      this.clearScreen();
      this.draw(this.context, this.xPos, this.yPos);
      this.accel += 6;
    }, 60);
  }
  draw(ctx: CanvasRenderingContext2D, xPos, yPos) {

    const img = new Image();
    img.src = '../../assets/bird1.png';

    img.onload = function () {

      ctx.drawImage(img, xPos, yPos, 50, 50);

    };

    if (yPos > 600) { console.log('dead'); }

  }
  onClick() {
    this.yPos -= 20;
    this.accel = -30;
    this.clearScreen();
    this.draw(this.context, this.xPos, this.yPos);

  }
  clearScreen() {
    this.context.fillStyle = 'blue';
    this.context.clearRect(0, 0, 800, 600);
    this.context.fillRect(0, 0, 800, 600);
  }

}

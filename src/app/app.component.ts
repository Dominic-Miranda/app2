import { Component } from '@angular/core';

interface Point{
  x:number,
  y:number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  points:Point[] = [];
  undone:Point[] = [];

  addPoint = (event:MouseEvent) => {
    const {x,y} = event;
    this.points.push({
      x,
      y
    })
    this.undone = [];
  }

  handleUndo = () => {
    let popped = this.points.pop()
    if(popped)
      this.undone.push(popped);
  }

  handleRedo = () => {
    let popped = this.undone.pop()
    if(popped)
      this.points.push(popped);
  }

}

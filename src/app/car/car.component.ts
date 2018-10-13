import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  carName = 'Skoda';
  carYear = '2013';

  getName() {
    return this.carName;
  }
}

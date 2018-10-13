import {Component, OnInit} from '@angular/core';
import {Event} from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  canAddCart = false;

  addCarStatus = '';

  inputText = '';

  constructor() {
    setTimeout(() => {
        this.canAddCart = true;
    }, 5000);
  }

  addCar() {
    this.addCarStatus = 'Test';
  }

  /*onKeyUp(event: Event) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }
*/
  onKeyUp(value) {
    console.log(value);
    this.inputText = value.target.value;
  }
}

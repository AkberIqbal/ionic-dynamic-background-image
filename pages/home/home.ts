import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bg:string;
  constructor(public navCtrl: NavController) {
    this.bg = "https://www.akberiqbal.com/JumboMob.jpg";
  }


}

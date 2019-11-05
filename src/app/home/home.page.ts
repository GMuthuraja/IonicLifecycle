import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  constructor() {
    console.log("Home", "Constructor");
  }

  ngOnInit() {
    console.log("Home", "ngOnInit");
  }

  ionViewWillEnter() {
    console.log("Home", "ionViewWillEnter");
  }

  ionViewDidEnter() {
    console.log("Home", "ionViewDidEnter");
  }

  ionViewWillLeave() {
    console.log("Home", "ionViewWillLeave");
  }

  ionViewDidLeave() {
    console.log("Home", "ionViewDidLeave");
  }

  ngOnDestroy() {
    console.log("Home", "ngOnDestroy");
  }
}

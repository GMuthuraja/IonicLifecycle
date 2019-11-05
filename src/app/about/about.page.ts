import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})

export class AboutPage implements OnInit {

  constructor() {
    console.log("About", "Constructor");
  }

  ngOnInit() {
    console.log("About", "ngOnInit");
  }

  ionViewWillEnter() {
    console.log("About", "ionViewWillEnter");
  }

  ionViewDidEnter() {
    console.log("About", "ionViewDidEnter");
  }

  ionViewWillLeave() {
    console.log("About", "ionViewWillLeave");
  }

  ionViewDidLeave() {
    console.log("About", "ionViewDidLeave");
  }

  ngOnDestroy() {
    console.log("About", "ngOnDestroy");
  }

}

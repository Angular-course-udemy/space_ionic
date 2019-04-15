import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Tab1Page } from '../index.pages';

@Component({
  selector: 'page-tab3',
  templateUrl: 'tab3.html',
})
export class Tab3Page {

  rootPage: any = Tab1Page

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
  }

  backToSpace() { this.navCtrl.push(this.rootPage) }

}

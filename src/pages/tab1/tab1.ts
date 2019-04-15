import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PEOPLE } from '../../data/data'
import { PersonsPage } from '../index.pages';

@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  spacePeople = PEOPLE
  personInfo:any = PersonsPage

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

}

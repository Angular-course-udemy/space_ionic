import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Tab2Page } from '../index.pages';

@Component({
  selector: 'page-persons',
  templateUrl: 'persons.html',
})
export class PersonsPage {

  person: any = {}
  galaxyPage: any = Tab2Page

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.person = this.navParams.get('person')
    console.log(this.person)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonsPage');
  }

  goToGalaxy() { this.navCtrl.push(this.galaxyPage)}

}

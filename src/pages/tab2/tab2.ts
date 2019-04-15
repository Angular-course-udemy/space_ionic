import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Tab1Page } from '../index.pages';

@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page implements OnInit{

  rootPage: any = Tab1Page

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit (){
    this.onLoad()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

  onLoad() {
    const loader = this.loadingCtrl.create({
      duration: 2000
    })
    loader.present()
  }
  
  backToSpace() { this.navCtrl.push(this.rootPage) }

}
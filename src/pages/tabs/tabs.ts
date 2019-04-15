import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { Tab1Page, Tab2Page, Tab3Page } from '../index.pages';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage implements AfterViewInit {

  @ViewChild(Tabs) tabs: Tabs
  private selectedTabName: string

  tab1:any
  tab2:any
  tab3:any

  tab1TimesClicked: number = null
  tab2TimesClicked: number = null
  tab3TimesClicked: number = null

  constructor(public navCtrl: NavController) {
    this.tab1 = Tab1Page
    this.tab2 = Tab2Page
    this.tab3 = Tab3Page
  }

  ngAfterViewInit() {
    this.tabs.ionChange.subscribe((ev) => {
      let selectedTab = this.tabs.getSelected()
      this.selectedTabName = selectedTab.tabTitle
      this.tabClicked(this.selectedTabName)
    })
  }

  tabClicked(tabName: string) {
    if (tabName === 'Space') {
      this.tab1TimesClicked = this.tab1TimesClicked + 1
    } else if (tabName === 'Galaxy') {
      this.tab2TimesClicked = this.tab2TimesClicked + 1
    }  else {
      this.tab3TimesClicked = this.tab3TimesClicked + 1
    } 
  }

}

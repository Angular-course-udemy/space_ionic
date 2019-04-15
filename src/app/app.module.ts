import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { 
  PersonsPage,
  Tab1Page,
  Tab2Page,
  Tab3Page,
  TabsPage
} from '../pages/index.pages'

@NgModule({
  declarations: [
    MyApp,
    PersonsPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Back'
    })  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PersonsPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

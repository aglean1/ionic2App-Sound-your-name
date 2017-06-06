import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlphaBPage } from '../pages/alpha-b/alpha-b';
import { NameListPage } from '../pages/name-list/name-list';
import {Sounds} from "../providers/sounds";


@NgModule({
  declarations: [
    MyApp,
    AlphaBPage,
    NameListPage,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlphaBPage,
    NameListPage,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Sounds]
})
export class AppModule {}

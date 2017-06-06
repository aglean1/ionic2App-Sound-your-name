import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the NameList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-name-list',
  templateUrl: 'name-list.html'
})
export class NameListPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello NameListPage Page');
  }

}

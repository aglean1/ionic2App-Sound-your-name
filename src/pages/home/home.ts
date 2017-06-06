import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlphaBPage } from '../alpha-b/alpha-b';

@Component({
    selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  alphabpage = AlphaBPage;
  public alphab:any;
  constructor(public navCtrl: NavController) {

    this.alphab = [
      {
        name: 'A'

      },
      {
        name: 'B'

      },
      {
        name: 'C'

      },
      {
        name: 'D'

      },
      {
        name: 'E'

      },
      {
        name: 'F'

      },
      {
        name: 'G'

      },
      {
        name: 'H'

      }



    ]


  }

}

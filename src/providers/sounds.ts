import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Sounds provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Sounds {
  dataUrl = 'assets/data/alphaSounds.json';
  data: any;
  constructor(public http: Http) {
    console.log('Hello Sounds Provider');

    this.data = null;
    console.log('Hello MyProvider Provider');
  }
  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.dataUrl)
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
    });
  }

}

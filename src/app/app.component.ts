import { Component } from '@angular/core';
import * as moment from 'moment';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-webpack-analyzer-demo';
  constructor(){
    const time = moment.utc();
    const firebaseConfig = {};
    initializeApp(firebaseConfig);
  }
}

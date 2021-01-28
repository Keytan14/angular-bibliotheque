import { Component } from '@angular/core';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyAo4_-MASpwAucrW4N051TMlbPhbzM1F7Y",
      authDomain: "bookshelves-37ccf.firebaseapp.com",
      databaseURL: "https://bookshelves-37ccf-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "bookshelves-37ccf",
      storageBucket: "bookshelves-37ccf.appspot.com",
      messagingSenderId: "1041247266625",
      appId: "1:1041247266625:web:66976c4ca484c89709a3c0",
      measurementId: "G-NSWS5KWGF9"
    };
    firebase.initializeApp(firebaseConfig);
  }

}

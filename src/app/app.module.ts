import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

var config = {
  apiKey: "AIzaSyColJE5CQv3rLP0SgzFTyZO_iEAmyMp7ao",
  authDomain: "firestore-102bb.firebaseapp.com",
  databaseURL: "https://firestore-102bb.firebaseio.com",
  projectId: "firestore-102bb",
  storageBucket: "",
  messagingSenderId: "917012634982"
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

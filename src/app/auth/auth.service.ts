import { Injectable } from '@angular/core';
import {FirebaseAuth} from '@angular/fire';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import UserCredential = firebase.auth.UserCredential;
import {Observable, Subject} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, DocumentChangeAction} from '@angular/fire/firestore';
import {UserModel} from './User.model';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  CurrentUser: UserModel = null;
  CurU: Subject<UserCredential> = new Subject<UserCredential>();


  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore) {
  }



  doRegister(email, password, CurrentUser) {

    return new Promise<any>(((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( res => {
          this.CurU.next(res);
          this.CurrentUser = CurrentUser;
          this.afs.collection('users').add(CurrentUser);
          this.setUpUid(email);
          resolve(res);
        }, err => reject(err));
    }));
  }

  doLogin(email, password) {
    this.afs.collection('users', ref => ref.where('email', '==', email)).valueChanges().subscribe(( res: UserModel[]) => {
      this.CurrentUser = res[0];
      this.setUpUid(email);
      }
    );


    return new Promise<any>(((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then( res => {
          this.CurU.next(res);
          resolve(res);
        }, err => reject(err));
    }));
  }

  doUpdate(NewUser) {

    return new Promise<any>(((resolve, reject) => {
      console.log(this.CurrentUser.id);
      this.afs.collection('users').doc(this.CurrentUser.id).update({
        ...NewUser
      }).then(
        res => {
          resolve(res);
        },
        err => reject(err)
      );
    }));
  }

  setUpUid(email) {
   this.afs.collection('users').snapshotChanges().subscribe(
     res => this.CurrentUser.id = res[0].payload.doc.id
   );
  }

  doLogout() {
    this.CurU.next(null);
    this.CurrentUser = null;
  }
}



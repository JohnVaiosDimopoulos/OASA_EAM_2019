import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {LinesModel} from './lines.Model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TimeTablesService {

  buses$: Observable<LinesModel[]>;
  troley$: Observable<LinesModel[]>;
  busesCollection: AngularFirestoreCollection<LinesModel>;
  troleyCollection: AngularFirestoreCollection<LinesModel>;

  constructor(public afs: AngularFirestore) {
    this.busesCollection = this.afs.collection('lines',
        ref => ref.where('type', '==', 'bus'));
    this.buses$ = this.busesCollection.valueChanges();

    this.troleyCollection = this.afs.collection('lines',
        ref => ref.where('type', '==', 'troley'));
    this.troley$ = this.troleyCollection.valueChanges();
  }

  getBuses() {
    return this.buses$;
  }

  getTroleys() {
    return this.troley$;
  }
}

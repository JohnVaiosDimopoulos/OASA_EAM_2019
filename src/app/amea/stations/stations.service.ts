import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {StationModel} from './station.Model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  stations$: Observable<StationModel[]>;
  stationsCollection: AngularFirestoreCollection<StationModel>;

  constructor(private afs: AngularFirestore) {
    this.stationsCollection = this.afs.collection('amea');
    this.stations$ = this.stationsCollection.valueChanges();
  }

  GetStations() {
    return this.stations$;
  }


}

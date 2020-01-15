import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
interface Anouncement {
  title: string;
  body: string;
}

@Component({
  selector: 'app-anouncements',
  templateUrl: './anouncements.component.html',
  styleUrls: ['./anouncements.component.css']
})
export class AnouncementsComponent implements OnInit {

  Announcements$: Observable<Anouncement[]>;
  constructor(public afs: AngularFirestore) { }

  ngOnInit() {

  }

}

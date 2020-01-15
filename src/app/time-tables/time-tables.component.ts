import { Component, OnInit } from '@angular/core';
import {LinesModel} from './lines.Model';
import {TimeTablesService} from './time-tables.service';

@Component({
  selector: 'app-time-tables',
  templateUrl: './time-tables.component.html',
  styleUrls: ['./time-tables.component.css']
})
export class TimeTablesComponent implements OnInit {

  Selected;
  buses: LinesModel[] = [];
  troleys: LinesModel[] = [];

  SelectedLine: LinesModel = null;

  constructor(private timeTablesService: TimeTablesService) { }

  ngOnInit() {}

  GetBuses() {
    this.timeTablesService.getBuses().subscribe(
      buses => {
        console.log(buses);
        this.buses = buses;
      }
    );
  }

  GetTroleys() {
    this.timeTablesService.getTroleys().subscribe(
      troleys => {
        console.log(troleys);
        this.troleys = troleys;
      }
    );
  }

}

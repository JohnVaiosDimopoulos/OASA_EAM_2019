import { Component, OnInit } from '@angular/core';
import {StationModel} from './station.Model';
import {StationsService} from './stations.service';
import {element} from 'protractor';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  Areas: string[] = [];
  stations: StationModel[];
  SelectedStations: StationModel[] = [];
  constructor(private  stationsService: StationsService) { }

  ngOnInit() {
    this.stationsService.GetStations().subscribe(
      stations => {
        console.log(stations);
        this.stations = stations;
        for (const station of stations) {
          if (this.Areas.find(el => el === station.area)) {
            continue;
          } else {
            this.Areas.push(station.area);
          }
        }
      }
    );
  }

  selectStations(area) {
    this.SelectedStations = [];
    for ( const station of this.stations) {
      if ( station.area === area) {
        console.log(station);
        this.SelectedStations.push(station);
      }
    }
  }
}

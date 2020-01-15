import { Component, OnInit} from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core';



declare var google: any;

interface Marker {
  lat: number;
  lng: number;
  label: string;
  draggable: boolean;
}
@Component({
  selector: 'app-route-finder',
  templateUrl: './route-finder.component.html',
  styleUrls: ['./route-finder.component.css']
})



export class RouteFinderComponent implements OnInit {
  error = false;
  map: any;
  lat = 37.977756;
  lng = 23.750738;
  private directionsRenderer: any;


  markers: Marker[] = [
    {
      lat: 37.977756,
      lng: 23.750738,
      label: 'Έναρξη',
      draggable: true
    }, {
      lat: 37.987320,
      lng:  23.757004,
      label: 'Προορισμός',
      draggable: true
    }
  ];
  duration: string = null;

  constructor(public gMap: GoogleMapsAPIWrapper) {}

  ngOnInit() {}

  find_Route() {

      this.error = false;
      this.duration = null;

      if (!this.directionsRenderer) {
        this.directionsRenderer = new google.maps.DirectionsRenderer({suppressMarkers: true});
      }

      const directionsRenderer = this.directionsRenderer;


      const directionsService = new google.maps.DirectionsService();
      const distanceMatrixService = new google.maps.DistanceMatrixService();
      directionsRenderer.setMap(this.map);
      directionsService.route({
        origin: {lat: this.markers[0].lat, lng: this.markers[0].lng},
        destination: {lat: this.markers[1].lat, lng: this.markers[1].lng},
        waypoints: [],
        optimizeWaypoints: true,
        travelMode: 'TRANSIT',
      }, (response, status) => {
        if (status === 'OK') {
          console.log(response);
          directionsRenderer.setDirections(response);
        } else {
          this.error = true;
          directionsRenderer.setMap(null);
          console.log('error: ' + status);
        }

      });

      distanceMatrixService.getDistanceMatrix({
        origins: [{lat: this.markers[0].lat, lng: this.markers[0].lng}],
        destinations: [{lat: this.markers[1].lat, lng: this.markers[1].lng}],
        travelMode: 'TRANSIT'
      }, (response, status) => {
        if (status === 'OK') {
          console.log(response);
          this.duration = response.rows[0].elements[0].duration.text;
        } else {
          console.log('error' + status);

        }
      });
  }

  onMapReady(envt) {
    this.map = envt;
  }

  onDragEnd(m: Marker, event, i: number) {
    this.markers[i].lat = event.coords.lat;
    this.markers[i].lng = event.coords.lng;
  }
}

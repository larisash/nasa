import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-meteors-map',
  templateUrl: './meteors-map.component.html',
  styleUrls: ['./meteors-map.component.scss']
})
export class MeteorsMapComponent implements OnInit {
  @Input() meteors:any[] = [];
  constructor() { }
  markers: marker[] = [];
  ngOnInit(): void {
  }
  ngOnChanges(){
    this.markers.length = 0;
   this.meteors.forEach((meteor)=>{

    this.markers.push({
      lat:meteor.geolocation.coordinates[1],
      lng:meteor.geolocation.coordinates[0],
      label:meteor.name
    })
   });

  }
  markerClicked($event: MouseEvent) {
    console.log('clicked');
    console.log($event);
  }

}
interface marker {
	lat: number;
	lng: number;
	label?: string;
}

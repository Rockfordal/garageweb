import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// console.log('`Add Vehicles` component loaded asynchronously');

@Component({
  selector: 'addvehicle',
  styles: [`
  `],
  templateUrl: './add-vehicle.component.html'
  // template: `For hot module reloading, run:  npm run start:hmr
  // <pre>this.localState = {{ localState | json }}</pre> `
})
export class AddVehicleComponent {
  localState: any;
  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.route
    //   .data
    //   .subscribe((data: any) => {
    //      // your resolved data from route
    //     this.localState = data.yourData;
    //   });

    // console.log('hello `AddVehicles` component');
    this.localState = {}; // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // this.localState.vehicles = mockData.vehicles;
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    // this.asyncDataWithWebpack();
  }

}
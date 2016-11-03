// import { Component } from '@angular/core';
// import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { $ } from 'jquery';
// import { vex } from 'vex-js;
// import { vexdialog } from 'vex-dialog'
//import { vexdialog } from './vex-js/js/vex.dialog.js'

var vex = require('vex-js')
vex.registerPlugin(require('vex-dialog'))
vex.defaultOptions.className = 'vex-theme-os'

// import { Overlay } from 'angular2-modal';
// import {VEXModalContext} from 'angular2-modal/plugins/vex/index';
// import { DialogPreset, VEXDialogButtons } from 'angular2-modal/plugins/vex/index';
// import { Modal } from 'angular2-modal/plugins/vex';

import { DataService } from '../shared/services/data.service';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Vehicles` component loaded asynchronously')

@Component({
  selector: 'vehicles',
  styles: [`
    .vehicles-box {
        margin-bottom: 20px;
        padding-right: 15px;
        padding-left: 15px;
        width: fit-content;
        background-color: rgba(68, 63, 54, 0.94);
        border-radius: 8px;
    }

    #lastvehicle {
        clear:both;
    }

    .vehicle-info {
        background-color: white;
        margin: 20px;
        float: left;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 5px 10px 5px black;
    }
  `],
  templateUrl: './vehicles.component.html'
  // template: `For hot module reloading, run:  npm run start:hmr
  // <pre>this.localState = {{ localState | json }}</pre> `
})
export class VehiclesComponent {
  localState: any
  title: string

  AddVehicle(vehicle: Object){
    this.localState.vehicles.push(vehicle);
  }

  Add(){
    var that = this //.AddVehicle("hej");

    var slumpImage = function() {
      var images = ["bluecar", "redcar", "redcarcab", "fastcar", "silvercar"];
      var r = Math.floor((Math.random() * 4) );
      return './assets/img/' + images[r] + '.jpg';
    }

    // vex.defaultOptions.className = 'vex-theme-flat-attack'; // os plain default

    vex.dialog.open({
        message: 'Lägg till nytt fordon:',
        input: [
            '<input name="manufacturer" type="text" placeholder="Tillverkare" required />',
            '<input name="model"        type="text" placeholder="Modell"      required />',
            '<input name="color"        type="text" placeholder="Färg"        required />',
            '<input name="weight"       type="text" placeholder="Vikt"        required />',
            '<input name="year"         type="text" placeholder="Årtal"       required />'
        ].join(''),
        buttons: [
            vex.dialog.buttons.YES,
            vex.dialog.buttons.NO
            // $.extend({}, vex.dialog.buttons.YES, { text: 'Login' }),
            // $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
        ],
        callback: function (data) {
            if (!data) {
                console.log('Cancelled')
            } else {
                let newvehicle = {
                    "image":        slumpImage(),
                    "manufacturer": data.manufacturer, 
                    "model":        data.model, 
                    "color":        data.color,
                    "weight":       data.weight,
                    "year":         data.year
                }
                that.AddVehicle(newvehicle);
            }
        }
    })

  }

  remove(index: Number){
    this.localState.vehicles.splice(index, 1);
  }

  constructor(public route: ActivatedRoute, private _dataService: DataService) {
  // constructor(public route: ActivatedRoute, private _dataService: DataService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    //  overlay.defaultViewContainer = vcRef
  }

  ngOnInit() {
    // this.route
    //   .data
    //   .subscribe((data: any) => {
    //      // your resolved data from route
    //     this.localState = data.yourData;
    //   });

    console.log('hello `Vehicles` component')
    this.localState = {} // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // this.localState.vehicles = mockData.vehicles;
    this.localState.vehicles = this._dataService.getVehicles()

    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    // this.asyncDataWithWebpack();
  }

  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    setTimeout(() => {
      System.import('../../assets/mock-data/mock-data.json')
        .then(json => {
          console.log('async mockData', json);
          this.localState = json;
        });
    });

  }
}
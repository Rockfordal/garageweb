import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { VehiclesComponent } from './vehicles.component';

describe('Vehicles', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      // provide a better mock
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      },
      AboutComponent
    ]
  }));

  it('should log ngOnInit', inject([VehiclesComponent], (about: VehiclesComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    about.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
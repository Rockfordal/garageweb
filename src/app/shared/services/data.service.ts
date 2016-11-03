import { Injectable } from '@angular/core';

@Injectable()
export class DataService
{

    constructor() {}

    getVehicles()
    {
        var mockData = require('assets/mock-data/mock-data.json');
        return mockData.vehicles;
    }

}
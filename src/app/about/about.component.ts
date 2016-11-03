import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// console.log('`About` component loaded asynchronously');

@Component({
  selector: 'about',
  styles: [`
    .about-content-header {
        margin-bottom: 10px;
    }

    .about {
        margin: 15px;
    }

    .about-content .contact {
        margin: 20px;
        float: left;
        text-align: center;
    }

/*.about-content .contact .role {
}*/

  `],
  templateUrl: './about.component.html'
})

export class AboutComponent {
  localState: any;
  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.route
    //   .data
    //   .subscribe((data: any) => {
    //     this.localState = data.yourData;
    //   });

    console.log('hello `About` component');
    var mockData = require('assets/mock-data/mock-data.json');
    this.localState = {}; // static data that is bundled
    this.localState.contacts = mockData.contacts;
  }

}
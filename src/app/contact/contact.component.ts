import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// console.log('`Contact` component loaded asynchronously');

@Component({
  selector: 'contact',
  styles: [`
  `],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  localState: any;
  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.route
    //   .data
    //   .subscribe((data: any) => {
    //     this.localState = data.yourData;
    //   });

    console.log('hello `Contact` component');
  }

}
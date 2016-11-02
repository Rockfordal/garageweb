/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
<div id="layout" class="content pure-g">
    <div id="nav" class="pure-u">
        <a href="#" class="nav-menu-button">Meny</a>

        <div class="nav-inner">
            <div class="pure-menu">
                <ul class="pure-menu-list">
                    <li class="pure-menu-item"><a [routerLink]=" ['./'] " class="pure-menu-link">Hem</a></li>
                    <li class="pure-menu-item"><a [routerLink]=" ['./about'] " class="pure-menu-link">Om Oss</a></li>
                    <li class="pure-menu-item"><a [routerLink]=" ['./vehicles'] " class="pure-menu-link">Garagets fordon</a></li>
                    <br />
                    <img id="logo" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSIYmaeF7FNwzIOlAKS2xpz0S9WmXruyf-TYf87nTjDTyEL_4Nw" />
                </ul>
            </div>
        </div>
    </div>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <span>Footer</span>
      <div>
      </div>
    </footer>
/div>`

// <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

// <nav>
//   <span> <a [routerLink]=" ['./'] "> Index </a> </span>
//   |
//   <span> <a [routerLink]=" ['./home'] "> Home </a> </span>
//</nav>

})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);

    $('.nav-menu-button').on('click', function (e) {
              $('#nav').toggleClass('active');
          });

    // alert("yo");
  }

}
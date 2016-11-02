import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `

<div id="layout" class="content pure-g">
   <div id="nav" class="pure-u" [class.active]="isNavbarActive">
        <a href="#" class="nav-menu-button" (click)="toggleNavbar()">Meny</a>

        <div class="nav-inner">
            <div class="pure-menu">
                <ul class="pure-menu-list">
                    <li class="pure-menu-item"><a [routerLink]=" ['./'] "         class="pure-menu-link">Hem</a></li>
                    <li class="pure-menu-item"><a [routerLink]=" ['./about'] "    class="pure-menu-link">Om oss</a></li>
                    <li class="pure-menu-item"><a [routerLink]=" ['./contact'] "  class="pure-menu-link">Kontakta Oss</a></li>
                    <li class="pure-menu-item"><a [routerLink]=" ['./vehicles'] " class="pure-menu-link">Garagets fordon</a></li>
                    <br />
                    <img id="logo" src="./assets/img/garage.jpg" />
                </ul>
            </div>
        </div>
    </div>

    <main>
      <div id="main" class="pure-u-1">
        <img id="header" class="pure-img" src="./assets/img/carsingarage.jpg" />
        <router-outlet></router-outlet>
      </div>
    </main>

    <footer>
      <span>&copy; 2016 test.com - Webmaster kurt@test.lab</span>
      <div>
      </div>
    </footer>
</div>`

// <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png'
  name = 'Angular 2 Webpack Starter'
  url = 'https://twitter.com/AngularClass'
  isNavbarActive = false
  toggleNavbar = function(el) {
    this.isNavbarActive = !this.isNavbarActive
  };

  constructor(
    public appState: AppState) {
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
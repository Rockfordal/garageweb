import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { ContactComponent } from './contact';
import { VehiclesComponent } from './vehicles';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',          component: HomeComponent },
  { path: 'home',      component: HomeComponent },
  { path: 'vehicles',  component: VehiclesComponent },
  { path: 'about',     component: AboutComponent },
  { path: 'contact',   component: ContactComponent },
  {
    path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => {
      return comp.default;
    })
    ,
  },
  { path: '**',    component: NoContentComponent },
];

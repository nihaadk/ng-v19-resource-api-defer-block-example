import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./components/car-list/car-list.component').then(
        m => m.CarListComponent
      ),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./components/car-detail/car-detail.component').then(
        m => m.CarDetailComponent
      ),
  },
];

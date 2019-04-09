import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TacheComponent} from './Views/tache/tache.component';
import {ContactComponent} from './Views/contact/contact.component';

const routes: Routes = [
  {
    path: 'taches',
    component: TacheComponent
  },
  { path: '',
    redirectTo: '/taches',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

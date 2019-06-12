import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConceptoListComponent } from './components/concepto-list/concepto-list.component';
import { ConceptoFormComponent } from './components/concepto-form/concepto-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'concepto',
    pathMatch: 'full'
  },
  {
    path: 'concepto',
    component: ConceptoListComponent
  },
  {
    path: 'concepto/add',
    component: ConceptoFormComponent
  },
  {
    path: 'concepto/edit/:id',
    component: ConceptoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpsAfiliationComponent } from './eps-afiliation/eps-afiliation.component';

const routes: Routes = [
  {
    path: '',
    component: EpsAfiliationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfiliationRoutingModule { }

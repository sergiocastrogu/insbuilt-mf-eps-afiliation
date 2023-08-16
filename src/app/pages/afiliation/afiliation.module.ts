import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfiliationRoutingModule } from './afiliation-routing.module';
import { EpsAfiliationComponent } from './eps-afiliation/eps-afiliation.component';


@NgModule({
  declarations: [
    EpsAfiliationComponent
  ],
  imports: [
    CommonModule,
    AfiliationRoutingModule
  ]
})
export class AfiliationModule { }

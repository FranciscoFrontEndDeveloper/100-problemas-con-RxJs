import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Problemas1a10RoutingModule } from './problemas1a10-routing.module';
import { Problemas1a10Component } from './problemas1a10/problemas1a10.component';


@NgModule({
  declarations: [Problemas1a10Component],
  imports: [
    CommonModule,
    Problemas1a10RoutingModule
  ],
  exports: [
    Problemas1a10Component
  ]
})
export class Problemas1a10Module { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Problemas1a10Module } from './problemas1a10/problemas1a10.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Problemas1a10Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './core/components/main-layout/main-layout.component';
import { Cap1Component } from './core/components/cap1/cap1.component';
import { SharedModule } from './shared/shared.module';
import { Cap2Component } from './core/components/cap2/cap2.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    Cap1Component,
    Cap2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

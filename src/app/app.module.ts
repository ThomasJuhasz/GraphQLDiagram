import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiagramComponent } from './diagram/diagram.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [AppComponent, DiagramComponent, ChartComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

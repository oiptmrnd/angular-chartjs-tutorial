import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarChartComponent } from './widgets/bar-chart/bar-chart.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';

=======
import { ChartsModule } from 'ng2-charts';
>>>>>>> dfeda356e57c8bc6a5e1e04dfe24f84ab07073d5
@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    NgbModule.forRoot()
=======
    NgbModule.forRoot(),
    ChartsModule
>>>>>>> dfeda356e57c8bc6a5e1e04dfe24f84ab07073d5
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BrowserXhr } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { WebserviceService } from './services/webservice.service';
import { DatatransferService } from './services/datatransfer.service';
import { AuthGuard } from './services/canactivate.service';


import { ModalModule } from 'ngx-modialog';
import { HttpClientModule }    from '@angular/common/http';

import { HighchartsChartModule } from 'highcharts-angular';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PagerService } from './services/pagerservice.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {TabModule} from 'angular-tabs-component';
import {ChartModule,HIGHCHARTS_MODULES} from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QualityComponent } from './quality/quality.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    QualityComponent,

  ],
  imports: [
    BsDatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    CommonModule,
    ComponentsModule,
    NgxPaginationModule,

    ModalModule.forRoot(),
    HttpClientModule,
    HighchartsChartModule,
    NgxSpinnerModule,
    TabModule,
    ChartModule
  ],
  providers: [
    WebserviceService,
    AuthGuard,
    DatatransferService,
    PagerService,
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

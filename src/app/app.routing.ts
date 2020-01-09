import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from './services/canactivate.service';
import { CanDeactivateGuard } from './services/deactivate.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QualityComponent } from './quality/quality.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    {path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'quality', component: QualityComponent },
    ]
  }
   
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }

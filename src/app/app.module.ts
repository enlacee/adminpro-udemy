import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas
import { APP_ROUTERS } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    ProgressComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
	BrowserModule,
	APP_ROUTERS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTERS } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.modulo';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// servicios
import { ServiceModule } from './services/service.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
	BrowserModule,
	APP_ROUTERS,
	PagesModule,
	FormsModule,
	ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

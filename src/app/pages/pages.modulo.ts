import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PAGES_ROUTERS } from './pages.routes';
// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/graficoDona.component';
// ng2-chart
import { ChartsModule } from 'ng2-charts';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
	declarations: [
		PagesComponent,
		DashboardComponent,
		ProgressComponent,
		Graficas1Component,
		IncrementadorComponent,
		GraficoDonaComponent,
		AccountSettingsComponent
	],
	exports: [
		PagesComponent,
		DashboardComponent,
		ProgressComponent,
		Graficas1Component,
	],
	imports: [
		SharedModule,
		PAGES_ROUTERS,
		FormsModule,
		ChartsModule
	]
})
export class PagesModule { }

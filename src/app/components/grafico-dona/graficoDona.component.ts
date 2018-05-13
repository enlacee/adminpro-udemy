import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './graficoDona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
	// Doughnut
	@Input() chartLabels:string[] = ['X1', 'X2', 'X3'];
	@Input() chartData:number[] = [350, 450, 100];
	@Input() chartType:string = 'doughnut';

	constructor() { }

	ngOnInit() {
	}
}

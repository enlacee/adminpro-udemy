import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-incrementador',
	templateUrl: './incrementador.component.html',
	styles: []
})
export class IncrementadorComponent implements OnInit {

	@ViewChild('txtProgress') txtProgress: ElementRef;
	@Input('nombre') leyenda: string = 'Leyenda';
	@Input() progreso: number = 50;

	@Output() cambioValor: EventEmitter<number> = new EventEmitter();

	constructor() {
		// console.log('leyenda', this.leyenda);
		// console.log('progreso', this.progreso);
	}

	ngOnInit() {
		// console.log('progreso', this.progreso);
	}

	onChange( newValue: number ) {
		console.log('newValue', newValue);

		// let elemHTML: any = document.getElementsByName('progreso')[0];

		if ( newValue >= 100) {
			this.progreso = 100;
		} else if (newValue <= 0) {
			this.progreso = 0;
		} else {
			this.progreso = newValue;
		}

		// elemHTML.value = this.progreso;
		this.txtProgress.nativeElement.value = this.progreso;

		this.cambioValor.emit(this.progreso);
	}

	cambiarValor( valor ) {

		let theValue = this.progreso + (valor);
		console.log('theValue', theValue);

		if ( theValue >= 100 ) {
			theValue = 100;
		}

		if ( theValue < 0 ) {
			theValue = 0;
		}

		// this.progreso = this.progreso + (valor);
		this.progreso = theValue;
		this.cambioValor.emit(this.progreso);
		this.txtProgress.nativeElement.focus();
	}

}

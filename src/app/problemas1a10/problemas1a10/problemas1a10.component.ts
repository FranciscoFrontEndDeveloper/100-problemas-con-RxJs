import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
@Component({
  selector: 'app-problemas1a10',
  templateUrl: './problemas1a10.component.html',
  styleUrls: ['./problemas1a10.component.sass'],
})
export class Problemas1a10Component implements OnInit {
  public sumarDosNumeros: any;
  public NumbSum1: any;
  public NumbSum2: any;
  public botonSumar: any;
  public ResultadoSuma: any;
  constructor() {

  }

  ngOnInit(): void {
    this.sumarDosNumbs();
  }

  sumarDosNumbs(): any {
    this.botonSumar = document.querySelector('#sumar');
    const SumaDosNumeros = fromEvent(this.botonSumar, 'click');
    SumaDosNumeros.subscribe(() => {
      this.NumbSum1 = document.querySelector('#sumNumb1');
      this.NumbSum2 = document.querySelector('#sumNumb2');
      this.ResultadoSuma = this.NumbSum1.value += this.NumbSum2.value;
    });
  }
}

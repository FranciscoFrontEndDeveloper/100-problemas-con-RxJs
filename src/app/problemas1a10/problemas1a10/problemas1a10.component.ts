import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, from } from 'rxjs';
@Component({
  selector: 'app-problemas1a10',
  templateUrl: './problemas1a10.component.html',
  styleUrls: ['./problemas1a10.component.sass'],
})
export class Problemas1a10Component implements OnInit {
  public sumarDosNumeros: any;
  public NumbSum1: any;
  public NumbSum2: any;
  public NumbDiv1: any;
  public NumbDiv2: any;
  public botonSumar: any;
  public ResultadoSuma: any;
  public ResultadoDivision: any;
  public array2: any;
  public botonDividir: any;
  // public observer: any;
  constructor() {
    this.array2 = ['One', 'Two', 'Three'];
  }

  ngOnInit(): void {
    this.sumarDosNumbs();
    this.residuoDosNumeros();

    fromEvent(document, 'click');
    // from(this.array2).subscribe(observer);
  }

  sumarDosNumbs(): any {
    this.botonSumar = document.querySelector('#sumar');
    const SumaDosNumeros = fromEvent(this.botonSumar, 'click');
    const observerSuma = {
      next: () => {
        this.NumbSum1 = document.querySelector('#sumNumb1');
        this.NumbSum2 = document.querySelector('#sumNumb2');
        this.ResultadoSuma =
          parseInt(this.NumbSum1.value) + parseInt(this.NumbSum2.value);
      },
    };
    SumaDosNumeros.subscribe(observerSuma);
  }

  residuoDosNumeros(): any {
    this.botonDividir = document.querySelector('#dividir');
    const ResiduoDosNumeros = fromEvent(this.botonDividir, 'click');
    ResiduoDosNumeros.subscribe(() => {
      this.NumbDiv1 = document.querySelector('#divNumb1');
      this.NumbDiv2 = document.querySelector('#divNumb2');
      this.ResultadoDivision =
        parseInt(this.NumbDiv1.value) / parseInt(this.NumbDiv2.value);
    });
  }
}

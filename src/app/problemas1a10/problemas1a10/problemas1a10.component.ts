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
  public botonSumar: any;
  public ResultadoSuma: any;
  public array2: any;
  // public observer: any;
  constructor() {
    this.array2  = ['One', 'Two', 'Three'];
  }

  ngOnInit(): void {
    this.sumarDosNumbs();
    const observer = {
      next: (x: any) => console.log('observador  con next ' + x),
      error: (err: any) => console.log('observador con error' + err),
      complete: () => console.log('observador completado'),
    };

    fromEvent(document, 'click');
    from(this.array2).subscribe(observer);
  }

  sumarDosNumbs(): any {
    this.botonSumar = document.querySelector('#sumar');
    const SumaDosNumeros = fromEvent(this.botonSumar, 'click');
    SumaDosNumeros.subscribe(() => {
      this.NumbSum1 = document.querySelector('#sumNumb1');
      this.NumbSum2 = document.querySelector('#sumNumb2');
      this.ResultadoSuma =
        parseInt( this.NumbSum1.value) + parseInt(this.NumbSum2.value);
    });
  }




}

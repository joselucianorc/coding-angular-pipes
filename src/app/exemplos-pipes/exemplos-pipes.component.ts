import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {
  
  livro: any = {
    "editora" : 'Packt Publishing; Illustrated edição (28 outubro 2014)',
    "idioma" : 'Inglês',
    "paginas" : "218",
    "preco" : '55.45',
    "data" : new Date(2014, 9, 28),
    "ISBN10" : '1783554878',
    "ISBN13" : '978-1783554874',
    "dimensoes" : '19.05 x 1.27 x 23.5 cm',
    "avaliacoes": '4.2' 
  };

  constructor() { }

  ngOnInit(): void {
  }

}

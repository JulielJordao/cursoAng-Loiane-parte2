import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes-pipe',
  templateUrl: './testes-pipe.component.html',
  styleUrls: ['./testes-pipe.component.css']
})
export class TestesPipeComponent implements OnInit {

  livro : Object = {
    titulo: 'Aprendendo javascript dados estruturais e algoritmos',
    rating: '4.53213',
    numeroDePaginas: '421',
    dataLancamento: new Date(2016,5,7),
    preco: '44.90',
    url: 'http://a.co/glqjpRP'
  }

  constructor() { }

  ngOnInit() {
  }

}

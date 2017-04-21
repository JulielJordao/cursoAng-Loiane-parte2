import { Component, OnInit } from '@angular/core';
import { reject } from "q";
import { resolve } from "url";
import { Observable } from "rxjs/Rx";

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

  livros: Array<String> = ['Angular 2', 'Java'];

  filtro: String = '';

  addCurso: Function = function(livro){
    this.livros.push(livro);
  }
  
  obterCursos(){
    if(this.livros.length === 0 || this.filtro === null || this.filtro.trim() === ''){
      return this.livros;
    } 

    let filter = this.filtro.toLocaleLowerCase();

    return this.livros.filter( 
      v => v.toLocaleLowerCase().indexOf(filter) != -1
    );
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  });

  valorAsync2 = Observable.interval(2000).map(valor => 'Valor Assincrono 2')

  constructor() { }

  ngOnInit() {
  }

}

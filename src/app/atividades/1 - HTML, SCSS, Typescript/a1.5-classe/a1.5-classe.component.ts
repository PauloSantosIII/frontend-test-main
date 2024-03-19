import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a1.5-classe',
  templateUrl: './a1.5-classe.component.html',
  styleUrls: ['./a1.5-classe.component.scss']
})
export class A15ClasseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    class Publicacao {
      constructor(
          private readonly _titulo: string,
          private readonly _autor: string,
          private readonly _anoPublicacao: number
      ) {}

      get titulo(): string {
          return this._titulo;
      }

      get autor(): string {
          return this._autor;
      }

      get anoPublicacao(): number {
          return this._anoPublicacao;
      }

      descricao(): string {
          return `Título: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}`;
      }

    }

    class Livro extends Publicacao {
      constructor(
          titulo: string,
          autor: string,
          anoPublicacao: number,
          private readonly _isbn: string
      ) {
          super(titulo, autor, anoPublicacao);
      }

      get isbn(): string {
          return this._isbn;
      }
    }

    class Periodico extends Publicacao {
      constructor(
          titulo: string,
          autor: string,
          anoPublicacao: number,
          private readonly _issn: string
      ) {
          super(titulo, autor, anoPublicacao);
      }

      get issn(): string {
          return this._issn;
      }
    }
  }
}

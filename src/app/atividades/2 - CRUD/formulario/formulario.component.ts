import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  myForm!: FormGroup

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      nome: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      email: new FormControl("", [Validators.required]),
      senha: new FormControl("", [Validators.required]),
      cep: new FormControl("00000-000", [Validators.required]),
      logradouro: new FormControl("", []),
    })
    console.log(this.myForm.value)
  }

  submit() {
    if (this.myForm.invalid)
      return

    console.log('Enviou formulário', this.myForm.value)
  }

  buscarCep(cep: string) {

    console.log(cep)
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    return this.http.get(url);
  }
}

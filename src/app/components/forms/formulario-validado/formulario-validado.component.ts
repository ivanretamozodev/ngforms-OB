import { Component, OnInit } from '@angular/core';
//1.importamos de angular forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.scss'],
})
export class FormularioValidadoComponent implements OnInit {
  validatedForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.validatedForm = this.formBuilder.group({
      name: ['', Validators.required], //campo obligatorio
      lastname: '',
      //campos obligatorios con validaciones de minimo y maximo
      age: [
        '',
        Validators.compose([
          Validators.required,
          Validators.min(18),
          Validators.max(99),
        ]),
      ],
      //campo obligatorio de tipo email
      email: ['', Validators.compose([Validators.required, Validators.email])],
      //campo obligatorio con expresion regular
      password: ['', Validators.compose([Validators.required])],
      //campo booleano con true como obligatorio
      accept: [false, Validators.requiredTrue],
    });
  }

  get name() {
    return this.validatedForm.get('name');
  }
  get lastName() {
    return this.validatedForm.get('lastname');
  }
  get age() {
    return this.validatedForm.get('age');
  }
  get email() {
    return this.validatedForm.get('email');
  }
  get password() {
    return this.validatedForm.get('password');
  }
  get accept() {
    return this.validatedForm.get('accept');
  }

  //metodo del submit del formulario

  sendForm() {
    //controlar el formulario sea valido
    if (this.validatedForm.valid) {
      console.table(this.validatedForm.value);
      //resetear los campos del formulario
      this.validatedForm.reset();
    }
  }
}

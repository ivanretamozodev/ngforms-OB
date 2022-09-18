import { Component, OnInit } from '@angular/core';
//ejemplo de formulario reactivo
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  //1.definimos nuestro formulario

  form: FormGroup = new FormGroup({});
  //2.inyectamos el formbuilder para construir el formulario
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    //3.iniciamos los campos de nuestro formulario y sus valores
    this.form = this.formBuilder.group({
      name: '',
      lastname: '',
      email: '',
      address: '',
      phone: '',
    });
    //4.nos suscribimos a los cambios del formulario
    this.form.valueChanges.subscribe(console.log);
  }
}

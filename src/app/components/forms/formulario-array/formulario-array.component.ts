import { Component, OnInit } from '@angular/core';
//1 importamos de angular forms
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss'],
})
export class FormularioArrayComponent implements OnInit {
  arrayForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.arrayForm = this.formBuilder.group({
      name: '',
      lastname: '',
      phones: this.formBuilder.array([]), //iniciamos la lista de telefonos vacia
    });
  }
  //metodo Getter para obtener la lista de telefonos de el formulario
  get phonesOfForms(): FormArray {
    return this.arrayForm.get('phones') as FormArray;
  }

  //metodo para añadir telefonos al array
  addPhone() {
    //creamos un grupo de telefonos
    const newPhone = this.formBuilder.group({
      prefix: '',
      phone: '',
    });
    //y lo añadimos al array
    this.phonesOfForms.push(newPhone);
  }
  //metodo para eliminar telefonos de la lista

  deletePhone(index: number) {
    this.phonesOfForms.removeAt(index);
  }
}

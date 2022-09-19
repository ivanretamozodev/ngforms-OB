import { Component, OnInit } from '@angular/core';
//1.importamos de angular forms para crear formularios anidados
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.scss'],
})
export class FormularioAnidadoComponent implements OnInit {
  nestedForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    //agrupacion para telefonos
    const phone = this.formBuilder.group({
      prefix: '',
      phone: '',
    });
    const cellPhone = this.formBuilder.group({
      prefix: '',
      phone: '',
    });
    //agrupacion del formulario que tiene dos agrupaciones
    this.nestedForm = this.formBuilder.group({
      phone: phone,
      cellPhone: cellPhone,
    });
  }
}

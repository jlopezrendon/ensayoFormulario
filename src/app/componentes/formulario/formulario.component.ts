import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)] ],
    apellido: [ , [Validators.min(0), Validators.required] ],

  })


  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.formulario.reset({
      nombre: 'JJJ',
      apellido: 'LLL',
    })
  }

  guardar() {
    if(this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    console.log(this.formulario.value);

    this.formulario.reset();

  }

}

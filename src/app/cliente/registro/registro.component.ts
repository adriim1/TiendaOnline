import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';  // Importamos lo necesario
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,  // Componente standalone
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  imports: [ReactiveFormsModule, RouterLink]  // Importamos ReactiveFormsModule para usar formularios reactivos
})
export class RegistroComponent {
  // Creamos el FormGroup para manejar el formulario
  registroForm: FormGroup;

  constructor() {
    // Inicializamos el formulario con FormControl y validaciones
    this.registroForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmarPassword: new FormControl('', [Validators.required])
    }, this.passwordsMatchValidator);  // Añadimos validación personalizada para las contraseñas
  }

  // Validador personalizado para las contraseñas coincidentes
  passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const group = control as FormGroup;
    const password = group?.get('password')?.value;
    const confirmarPassword = group?.get('confirmarPassword')?.value;

    return password && confirmarPassword && password === confirmarPassword
      ? null
      : { noMatch: true };
  }

  // Método para manejar el envío del formulario
  registrarse() {
    if (this.registroForm.valid) {
      const { nombre, apellidos, email, password } = this.registroForm.value;
      console.log('Registro exitoso:', nombre, apellidos, email, password);
    } else {
      console.log('Formulario inválido');
      this.registroForm.markAllAsTouched();
  }
}
}

import { Component } from '@angular/core';
import { promises } from 'dns';
import { json } from 'stream/consumers';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactoForm= new FormGroup({
    nombre: new FormControl(""),
    numero: new FormControl(""),
    correo:new FormControl(""),
    mensaje:new FormControl(""),
})
  googleSheetUrl = 'https://script.google.com/macros/s/AKfycby_rkxu5ZWKK6Cim6rxtX1mAR00opFPpdViGorW7YuUON1J6brmqW59dY9xxVwQXe2r/exec';
  async enviarContacto(){
    if (!this.contactoForm.value.nombre || 
      !this.contactoForm.value.numero || 
      !this.contactoForm.value.correo || 
      !this.contactoForm.value.mensaje) {
    alert("Por favor, completa todos los campos.");
    return;
      }

    try {
      // Enviar la solicitud POST
      const response = await fetch(this.googleSheetUrl, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        mode:'no-cors',
        body: JSON.stringify(this.contactoForm.value)
      });
      

      
      alert("¡Mensaje enviado correctamente!");

      this.contactoForm.reset();

    } catch (error: unknown) { 
        console.error('Error:', error);
        alert("Hubo un error inesperado.");
      
    }
  }

  constructor() {}

}

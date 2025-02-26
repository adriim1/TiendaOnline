import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  nombre = "Adrián Muñoz Sánchez";
  usuario = "@adriim._";
  seguidores = 120;
  amigos = 200;
  publicaciones = 15;

  amigosDestacados = [
    { usuario: "@anuel", imagen: "assets/img/amigo3.webp" },
    { usuario: "@luar_lal", imagen: "/assets/img/amigo1.webp" },
    { usuario: "@ntg", imagen: "/assets/img/amigo2.webp" }
  ];

  posts = [
    { contenido: "🎉 ¡Empezando un nuevo proyecto en Angular! #DesarrolloWeb", fecha: "Hace 2 días", imagen: "assets/post1.jpg" },
    { contenido: "🏋️‍♂️ Entrenando para la próxima competición 💪", fecha: "Hace 1 semana", imagen: "assets/post2.jpg" }
  ];

  galeria = [
    "assets/photo1.jpg",
    "assets/photo2.jpg",
    "assets/photo3.jpg"
  ];
}

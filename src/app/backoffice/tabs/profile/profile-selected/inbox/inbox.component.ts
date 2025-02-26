import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MailItem {
  from: string;
  subject: string;
  snippet: string;
  time: string;
  unread: boolean;
}

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent {
  mailList: MailItem[] = [
    {
      from: 'Javier Martínez',
      subject: 'Reunión de Proyecto',
      snippet: 'Hola, espero que puedas asistir a la reunión del próximo lunes...',
      time: '9:45',
      unread: true
    },
    {
      from: 'Mercado Libre',
      subject: 'Tu pedido está en camino',
      snippet: '¡Buenas noticias! Tu pedido llegará antes de lo esperado...',
      time: '8:20',
      unread: false
    },
    {
      from: 'Spotify',
      subject: 'Descubre tu playlist semanal',
      snippet: 'Hemos preparado una playlist personalizada para ti...',
      time: '7:10',
      unread: false
    },
    {
      from: 'Elena Morales',
      subject: 'Fotos de la fiesta',
      snippet: 'Te envío las fotos de la fiesta del sábado, espero que te gusten...',
      time: '6:55',
      unread: true
    },
    {
      from: 'Netflix',
      subject: 'Nuevo episodio disponible',
      snippet: 'Ya puedes disfrutar del nuevo episodio de tu serie favorita...',
      time: 'ayer',
      unread: false
    },
    {
      from: 'Juan López',
      subject: '¿Salimos este fin de semana?',
      snippet: '¿Te apetece ir al cine este fin de semana? Tengo entradas...',
      time: 'mar',
      unread: true
    },
  ];

  // Pestañas disponibles
  tabs = [
    { label: 'Principal', active: true },
    { label: 'Promociones', active: false },
    { label: 'Social', active: false },
    { label: 'Notificaciones', active: false },
    { label: 'Foros', active: false },
  ];

  // Cambia la pestaña activa
  activateTab(tabIndex: number) {
    this.tabs.forEach((tab, i) => {
      tab.active = i === tabIndex;
    });
  }
}

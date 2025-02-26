import { Routes } from '@angular/router';

import { LayoutComponent } from './cliente/layout/layout.component';
import { LayoutBackComponent } from './backoffice/layout/layout.component';

import { HomeComponent } from './cliente/home/home.component';
import { LoginComponent } from './cliente/login/login.component';
import { RegistroComponent } from './cliente/registro/registro.component';
import { TiendaComponent } from './cliente/tienda/tienda.component';
import { ControlPanelComponent } from './backoffice/control-panel/control-panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Importar los nuevos componentes del menú
import { PerfilComponent } from './backoffice/tabs/profile/profile-selected/perfil/perfil.component';
import { BalanceComponent } from './backoffice/tabs/profile/profile-selected/balance/balance.component';
import { InboxComponent } from './backoffice/tabs/profile/profile-selected/inbox/inbox.component';
import { SettingsComponent } from './backoffice/tabs/profile/profile-selected/settings/settings.component';
import { AvailableComponent } from './backoffice/tabs/profile/profile-selected/available/available.component';
import { LogoutComponent } from './backoffice/tabs/profile/profile-selected/logout/logout.component';

export const routes: Routes = [

  // Cliente
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: HomeComponent },        // Página de inicio
      { path: 'login', component: LoginComponent },  // Página de login
      { path: 'registro', component: RegistroComponent },  // Página de registro
      { path: 'tienda', component: TiendaComponent },  // Página de tienda
    ]
  },

  // Backoffice
  {
    path: 'app', component: LayoutBackComponent, children: [
      { path: '', redirectTo: 'control-panel', pathMatch: 'full' },  // Redirección al panel de control
      { path: 'control-panel', component: ControlPanelComponent },  // Panel de control principal

      // Rutas añadidas del menú
      { path: 'profile', component: PerfilComponent }, // Página del perfil
      { path: 'balance', component: BalanceComponent }, // Página de balance
      { path: 'inbox', component: InboxComponent }, // Página de inbox
      { path: 'settings', component: SettingsComponent }, // Página de ajustes
      { path: 'available', component: AvailableComponent }, // Página de disponibilidad
      { path: 'logout', component: LogoutComponent }, // Página de logout
    ]
  },

  // Página no encontrada
  { path: '**', component: PageNotFoundComponent },  // Ruta para manejar 404
];

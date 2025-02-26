import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // Import NgIf
import { TabNotificationComponent } from '../tabs/tab-notification/tab-notification.component';
import { SettingsComponent } from '../tabs/settings/settings.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-backoffice',
  templateUrl: './header-backoffice.component.html',
  styleUrls: ['./header-backoffice.component.scss'],
  standalone: true,
  imports: [NgIf, TabNotificationComponent, SettingsComponent, RouterLink] // Add NgIf to imports
})
export class HeaderBackofficeComponent {
  isMenuVisible: boolean = false;
  isActive: boolean = false;

  isActiveItems: any = {
    isActiveNotification: false,
    isActiveSettings: false,
  };

  constructor() {}


toggleMenu(menuName: string) {  // Add the parameter
    if (menuName === 'isMenuVisible') { // Check which menu to toggle
        this.isMenuVisible = !this.isMenuVisible;
    }
    console.log("Menu visible:", this.isMenuVisible);
}

  toggleLogo() {
    this.isActive = !this.isActive;
  }

  toggleItem(option: string) {
    Object.keys(this.isActiveItems).forEach((item) => {
      this.isActiveItems[item] = item === option ? !this.isActiveItems[item] : false;
    });
  }
}
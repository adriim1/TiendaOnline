import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-selected',
  imports: [],
  standalone: true,
  templateUrl: './profile-selected.component.html',
  styleUrls: ['./profile-selected.component.scss']
})
export class ProfileSelectedComponent {
  isMenuVisible = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    console.log("Menú visible:", this.isMenuVisible);
  }
}
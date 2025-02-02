import { Component, Injectable } from '@angular/core';
import { SetMenuState } from '../../services/setMenuState';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  title = 'Canciones';

  constructor(private setMenuState: SetMenuState) {}

  openMenu() {
    this.setMenuState.openSideMenu();
  }
}

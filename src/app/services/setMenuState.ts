import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SetMenuState {
  isSideMenuOpen: boolean = false;

  openSideMenu() {
    this.isSideMenuOpen = true;
  }

  closeSideMenu() {
    this.isSideMenuOpen = false;
  }
}

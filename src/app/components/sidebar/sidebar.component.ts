import { Component, Injectable, OnInit } from '@angular/core';
import { SetMenuState } from '../../services/setMenuState';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  constructor(private setMenuState: SetMenuState) {}
  ngOnInit() {}

  getState() {
    return this.setMenuState.isSideMenuOpen;
  }

  openSideMenu() {
    this.setMenuState.openSideMenu();
  }

  closeSideMenu() {
    this.setMenuState.closeSideMenu();
  }
}

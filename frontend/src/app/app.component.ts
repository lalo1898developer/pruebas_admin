import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Configuración para sidenav y FAB
  @ViewChild('snav', { static: false }) sidenav: MatSidenav;
  opened: boolean;

  fab_toggle = true;
  fab;


  fabToggle() {
      if (this.sidenav.opened) {
        this.fab = document.getElementById("fab-button");
        this.fab.style.display = "none";
      } else {
        this.fab = document.getElementById("fab-button");
        this.fab.style.display = "inline";
      }
  }

  fillerNav = [
    { name: "systems", route: "systems", icon: "build" },
    { name: "roles", route: "roles", icon: "supervisor_account" },
  ];

  constructor(

  ) {
  }

  ngOnInit(): void {
  }


}

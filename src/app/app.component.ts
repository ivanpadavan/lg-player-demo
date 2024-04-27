import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf } from "@angular/common";
import { ClockComponent } from "./clock/clock.component";
import { BackHandler } from "./misc/back-handler";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, ClockComponent],
  template: `
    <router-outlet/>
    <app-clock style="position: absolute; right: 3rem; top: 3rem"/>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      background-color: #080522;
    }
  `]
})
export class AppComponent {
  constructor() {
    inject(BackHandler);
  }
}

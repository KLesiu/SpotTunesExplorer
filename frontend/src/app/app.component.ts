import { Component, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/main.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MainComponent],
  template:`<app-main>`
  
})
export class AppComponent {
 
}

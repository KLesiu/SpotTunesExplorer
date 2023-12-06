import { Component,inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { DashboardComponent } from './components/dashboard.component';
import { AuthService } from './services/auth.service';
import requestToken from './types/requestToken.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,LoginComponent,NgIf,DashboardComponent],
  template:`
  <app-login *ngIf="!authorized;else dashboard"/>
  <ng-template #dashboard>
    <app-dashboard/>
  </ng-template>
  `
  
})
export class AppComponent {
 code:string|null = new URLSearchParams(window.location.search).get("code")
 authorized:boolean=false
 private authService = inject(AuthService)
 ngOnInit(){
  if(this.code){
    this.authService.getToken(this.code)
    this.authorized=true
  }
  else this.authorized=false
 }
}

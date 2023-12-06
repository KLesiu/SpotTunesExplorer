import { NgIf } from '@angular/common';
import { Component,inject } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login.component';
import { AuthService } from '../services/auth.service';

@Component({
    selector:'app-main',
    standalone:true,
    imports:[NgIf,LoginComponent,DashboardComponent],
    template: `
    <app-login *ngIf="!authorized;else dashboard"/>
    <ng-template #dashboard>
        <app-dashboard/>
    </ng-template>
    `,
})
export class MainComponent{
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

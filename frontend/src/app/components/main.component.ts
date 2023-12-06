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
    <main class="bg-gradient-to-r from-emerald-300 from-10% via-emerald-400 via-30% to-emerald-500 to-90%  w-screen h-screen flex flex-wrap justify-center" >
        <h1 class="font-mono text-5xl font-black text-center w-[100%] h-[10%] flex justify-center">SpotTunesExplorer       
            <span class="text-5xl  material-symbols-outlined">
            music_note
            </span>
        </h1>
        <app-login class="w-[25%] h-[75%] bg-green-900/30 rounded-2xl p-5" *ngIf="!authorized;else dashboard"/>
        <ng-template #dashboard>
            <app-dashboard class="w-[95%] h-[85%] bg-green-900/30 rounded-2xl p-5"/>
        </ng-template>
    </main>
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

import { Component,inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
    selector:'app-dashboard',
    standalone:true,
    imports:[NgIf,CommonModule],
    template: `
    <section class="w-[100%] h-[100%] flex ">
       <div *ngIf="!info;else infoSection">
        <h2>error</h2>
       </div>
       <ng-template #infoSection>
            <div class="w-[30%] border-r-2 border-r-black p-5 flex flex-col items-center justify-start gap-[10%]">
                <h2 class="text-5xl font-bold border-b-2 border-b-black">DASHBOARD</h2>
                <img class="rounded-3xl w-[55%] " src={{info.images[1].url}} alt="avatar">
                <div class="text-2xl">
                <p>name: {{info.display_name}}</p>
                <p>country: {{info.country}}</p>
                <p>followers: {{info.followers.total}}</p>
                </div>
            </div>
  
        
       </ng-template>

    </section>
    `,
})
export class DashboardComponent{
    private userService:UserService = inject(UserService)
    public info:any;
    ngOnInit(){
        this.getInfo()
    }
    async getInfo(){
        const userInfo= await this.userService.getUserProfile()
        this.info=userInfo
        console.log(this.info)
        return userInfo
    }
}
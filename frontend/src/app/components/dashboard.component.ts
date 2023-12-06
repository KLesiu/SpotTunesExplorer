import { Component,inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
    selector:'app-dashboard',
    standalone:true,
    imports:[NgIf,CommonModule],
    template: `
    <section>
       <div *ngIf="!info;else infoSection">
        <h2>error</h2>
       </div>
       <ng-template #infoSection>
        <h2>{{info.display_name}}</h2>
        
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
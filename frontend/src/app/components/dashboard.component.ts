import { Component,inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule, NgIf } from '@angular/common';
import { TunesService } from '../services/tunes.service';

@Component({
    selector:'app-dashboard',
    standalone:true,
    imports:[NgIf,CommonModule],
    template: `
    <section class="w-[100%] h-[100%] flex ">
       <div *ngIf="!showProfile;else infoSection">
        <button (click)="showProf()">SHOW</button>
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
            <div class="w-[70%] flex flex-col p-5 justify-center items-center gap-[20%]">
                <button (click)="getArtists()" class="text-3xl bg-blue-700 w-[50%] h-[15%] rounded-lg font-semibold hover:bg-blue-600">SHOW MY FAVOURITES ARTISTS</button>
                <button class="text-3xl bg-violet-700 w-[50%] h-[15%] rounded-lg font-semibold hover:bg-violet-600">SHOW MY FAVOURITES TRACKS</button>
            </div>
            <button (click)="logout()" class="absolute">LOGOUT</button>

       </ng-template>

    </section>
    `,
})
export class DashboardComponent{
    private userService:UserService = inject(UserService)
    private tunesService:TunesService=inject(TunesService)
    public info:any;
    public artists:any;
    public showProfile:boolean=false
    public token:string|null=""
    async getInfo(){
        const userInfo= await this.userService.getUserProfile(this.token!)
        this.info=userInfo
        return userInfo
    }
    async getArtists(){
        const artists = await this.tunesService.getUserTopArtists()
        this.artists=artists
        console.log(this.artists)
        return artists
    }
    logout():String{
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        return window.location.href="/"
    }
    showProf(){
        this.token=localStorage.getItem("accessToken")
        this.showProfile=true
        this.getInfo()
    }
}
import { Component,inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule, NgIf } from '@angular/common';
import { TunesService } from '../services/tunes.service';
import { TopArtistsComponent } from './topartists.component';
import { TopTracksComponent } from './toptracks.component';

@Component({
    selector:'app-dashboard',
    standalone:true,
    imports:[NgIf,CommonModule,TopArtistsComponent,TopTracksComponent],
    template: `
    <section class="w-[100%] h-[100%] flex ">
       <div *ngIf="!showProfile;else infoSection">
        <button (click)="showProf()">SHOW</button>
       </div>
       <ng-template #infoSection>
            <div class="w-[30%] border-r-2 border-r-black p-5 flex flex-col items-center justify-start gap-[10%]">
                <h2 class="text-5xl font-bold border-b-2 border-b-black w-[100%]">DASHBOARD</h2>
                <img class="rounded-3xl w-[55%] " src={{info.images[1].url}} alt="avatar">
                <div class="text-2xl">
                <p>name: {{info.display_name}}</p>
                <p>country: {{info.country}}</p>
                <p>followers: {{info.followers.total}}</p>
                </div>
            </div>
            <section class="w-[70%] p-5 relative" *ngIf="artists">
                <app-topartists class="w-[100%] " />
                <button class="absolute w-[10%]  top-2 right-2 rounded-xl flex justify-center items-center" (click)="back()">
                    <span class="text-gray-700 hover:text-gray-600 bg-black/10 rounded-xl flex justify-center items-center text-center w-[100%]  material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </button>
            </section>
            <section class="w-[70%] p-5 relative" *ngIf="tracks">
                <app-toptracks class="w-[100%] " />
                <button class="absolute w-[10%]  top-2 right-2 rounded-xl flex justify-center items-center" (click)="back()">
                    <span class="text-gray-700 hover:text-gray-600 bg-black/10 rounded-xl flex justify-center items-center text-center w-[100%]  material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </button>
            </section>
            <section class="w-[70%] h-[100%] flex flex-col  gap-5 p-5 relative justify-center items-center" *ngIf="showChooseSection">
                <div class="w-[70%] flex flex-col p-5 justify-center items-center gap-[20%]">
                    <button (click)="getArtists()" class="text-5xl bg-blue-700 w-[60%] h-[100%] rounded-lg font-semibold hover:bg-blue-600">SHOW MY FAVOURITES ARTISTS</button>
                    <button (click)="getTracks()" class="text-5xl bg-violet-700 w-[60%] h-[100%] rounded-lg font-semibold hover:bg-violet-600">SHOW MY FAVOURITES TRACKS</button>
                </div>
                
            </section>
            <button  (click)="logout()" class="absolute w-[5%] bg-red-700  hover:bg-red-600 rounded-2xl top-[90%] h-[5%]">LOGOUT</button>
       </ng-template>

    </section>
    `,
})
export class DashboardComponent{
    private userService:UserService = inject(UserService)
    private tunesService:TunesService=inject(TunesService)
    public info:any;
    public artists:any;
    public tracks:any;
    public showProfile:boolean=false
    public token:string|null=""
    public showChooseSection:boolean=true
    async getInfo(){
        const userInfo= await this.userService.getUserProfile(this.token!)
        this.info=userInfo
        return userInfo
    }
    async getArtists(){
        const artists = await this.tunesService.getUserTopArtists(this.token!)
        this.artists=artists
        this.showChooseSection=false
        return artists
    }
    async getTracks(){
        const tracks = await this.tunesService.getUserTopTracks(this.token!)
        this.tracks = tracks
        this.showChooseSection=false
        return tracks
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
    back(){
        this.artists=null;
        this.tracks=null;
        this.showChooseSection=true
    }
}
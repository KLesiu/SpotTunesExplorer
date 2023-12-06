import { Component } from '@angular/core';

@Component({
    selector:'app-login',
    standalone:true,
    imports:[],
    template: `
    <section class="w-[100%] h-[100%] flex flex-wrap justify-center content-around" >
        <h2 class="w-[100%] text-center text-7xl font-medium">LOGIN</h2>
        <a class="w-[70%] h-[20%] flex flex-wrap justify-center content-around bg-gray-300 text-4xl text-center rounded-xl hover:bg-gray-200" [href]="AUTH_URL">Login With Spotify</a>
    </section>
    `,
})
export class LoginComponent{
    AUTH_URL:string="https://accounts.spotify.com/authorize"
    ngOnInit(){
        this.AUTH_URL+= "?client_id=491a2c9963de4a8f8f515e7b6a2bb9a1"
        this.AUTH_URL+= "&response_type=code"
        this.AUTH_URL+= "&redirect_uri=http://localhost:4200"
        this.AUTH_URL+= "&show_dialog=true"
        this.AUTH_URL+= "&scope=user-read-private user-read-playback-state user-top-read"
    }

    
}
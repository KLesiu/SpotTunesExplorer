import { Component } from '@angular/core';

@Component({
    selector:'app-login',
    standalone:true,
    imports:[],
    template: `
    <section>
        <a [href]="AUTH_URL">Login With Spotify</a>
    </section>
    `,
})
export class LoginComponent{
    AUTH_URL:string = "https://accounts.spotify.com/authorize?client_id=491a2c9963de4a8f8f515e7b6a2bb9a1&response_type=code&redirect_uri=http://localhost:4200&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
    
}
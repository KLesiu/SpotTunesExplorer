import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class TunesService{
    private readonly URL:string="https://api.spotify.com/v1/me/top/artists?limit=10&offset=0&time_range=long_term"
    private readonly token:string|null= localStorage.getItem("accessToken")
    async getUserTopArtists(){
        const response = await fetch(this.URL,{
            headers:{
                "Authorization":`Bearer ${this.token}`
            }
        }).then(res=>res).catch(err=>err)
        console.log(response)
        return response

    }
}
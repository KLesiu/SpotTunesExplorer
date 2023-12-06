import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class TunesService{
    private readonly URL:string="https://api.spotify.com/v1/me/top/artists?limit=10&offset=0&time_range=long_term"
    async getUserTopArtists(token:string){
        const response = await fetch(this.URL,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json()).catch(err=>err).then(data=>data)
        console.log(response)
        return response

    }
}
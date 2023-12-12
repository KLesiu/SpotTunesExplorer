import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class TunesService{
    private readonly URLArtists:string="https://api.spotify.com/v1/me/top/artists?limit=10&offset=0&time_range=long_term"
    private readonly URLTracks:string="https://api.spotify.com/v1/me/top/tracks?limit=10&offset=0&time_range=long_term"
    async getUserTopArtists(token:string){
        const response = await fetch(this.URLArtists,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json()).catch(err=>err).then(data=>data)
        return response

    }
    async getUserTopTracks(token:string){
        const response = await fetch(this.URLTracks,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json()).catch(err=>err).then(data=>data)
        return response 
    }
}
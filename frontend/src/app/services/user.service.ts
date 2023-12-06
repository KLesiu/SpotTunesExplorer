import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class UserService{
    private readonly URL:string = "https://api.spotify.com/v1/me"
    async getUserProfile(token:string){
        const response = await fetch(this.URL,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json()).catch(err=>err)
        return response

    }
}
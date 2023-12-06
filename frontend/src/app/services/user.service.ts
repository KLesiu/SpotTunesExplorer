import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class UserService{
    private readonly URL:string = "https://api.spotify.com/v1/me"
    private readonly token:string|null= localStorage.getItem("accessToken")
    async getUserProfile(){
        const response = await fetch(this.URL,{
            headers:{
                "Authorization":`Bearer ${this.token}`
            }
        }).then(res=>res.json()).catch(err=>err)
        return response

    }
}
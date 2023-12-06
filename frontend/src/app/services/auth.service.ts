import { Injectable } from "@angular/core";
import requestToken from "../types/requestToken.type";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    private readonly URL = "http://localhost:8080/api"

    async getToken(code:string){
        console.log(code)
        const response:requestToken = await fetch(`${this.URL}/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                code:code
            })

        }).then(res=>res.json()).catch(err=>err)
        localStorage.setItem("accessToken",response.accessToken)
        localStorage.setItem("refreshToken",response.refreshToken)
        return response

    }
}
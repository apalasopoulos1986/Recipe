import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
interface AuthResponseData{
    kind:string;
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
}


@Injectable({providedIn:'root'})
export class AuthService<AuthResponseData>{
    constructor(private http:HttpClient){}

signup(email:string, password:string){
return this.http.post<AuthResponseData>(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBEtqF2doiemo70Pr-gDdFWEd9uOQnXHcw',
    {
        email:email,
        password:password,
        returnSecureToken:true

    }

    );
    }
}
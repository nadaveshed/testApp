import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { AuthData } from "./auth-data.model";

@Injectable({ providedIn: "root" })
export class AuthService {
    private token: string;

    constructor(private http: HttpClient) {}

    getToken() {
        return this.token;
      }

    createUser(name: string, email: string, password: string) {
        const authData: AuthData = { name: name, password: password }
        this.http.post("http://localhost:4200/api/user/register", authData)
            .subscribe(response => {
               console.log(response); 
            })
    }

    login(name: string, password: string) {
        const authData: AuthData = {name: name, password: password};
        this.http.post<{token: string}>("http://localhost:3000/api/user/login", authData)
          .subscribe(response => {
            const token = response.token;
            this.token = token;
          })
      }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:3000/login";

  createuser(user:any):Observable<any>{
    return this.http.post<any>(this.baseUrl, user);
  }
  getUser(){
    return this.http.get<any>(this.baseUrl);
  }
}

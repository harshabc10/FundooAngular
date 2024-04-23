import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService :HttpService) { }

  loginApiCall(email : string,password : string){
    return this.httpService.loginApi(email,password)
  }
  signUpApiCall(requestBody: any) {
    return this.httpService.signUpApi(requestBody);
  }
}

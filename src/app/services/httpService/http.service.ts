import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { 

  }
  loginApi(email:string,password:string): Observable<any>{
    // https://localhost:7004/api/User/Login?Email=pdshashank8%40gmail.com&password=Shashank%4030
    return this.http.post(`https://localhost:7004/api/User/Login?Email=${encodeURI(email) }&password=${encodeURI(password)}`,{})
  }

  signUpApi(requestBody: any): Observable<any> {
    return this.http.post('https://localhost:7004/api/User', requestBody, {});
  }
}

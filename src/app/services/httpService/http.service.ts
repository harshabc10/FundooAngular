import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl:string = "https://localhost:7004/api"
 
  private authHeader = new HttpHeaders({
    //'Accept': "application/json",
    Authorization: `Bearer ${localStorage.getItem('authToken')}` || ""
  })

  constructor(private http : HttpClient) { 

  }
  loginApi(email:string,password:string): Observable<any>{
    // https://localhost:7004/api/User/Login?Email=pdshashank8%40gmail.com&password=Shashank%4030
    return this.http.post(`https://localhost:7004/api/User/Login?Email=${encodeURI(email) }&password=${encodeURI(password)}`,{})
  }


  signUpApi(requestBody: any): Observable<any> {
    return this.http.post('https://localhost:7004/api/User', requestBody, {});
  }

  getAllNotesApi(){
    return this.http.get('https://localhost:7004/api/usernotes/ByUserId',{headers:this.authHeader})
  }

  addNotesApi(noteData: any): Observable<any> {
    return this.http.post('https://localhost:7004/api/usernotes', noteData, { headers: this.authHeader });
  }

  archiveApi(noteData:any):Observable<any>{
    return this.http.post('https://localhost:7004/api/usernotes/archive',noteData,{headers:this.authHeader})
  }

  trashApi(noteData:any):Observable<any>{
    return this.http.post('https://localhost:7004/api/usernotes/trash',noteData,{headers:this.authHeader})
  }

  colorApi(noteId: number, color: string): Observable<any> {  
    console.log(color)  
    return this.http.put(`https://localhost:7004/api/usernotes/changecolor/${noteId}?color=${encodeURIComponent(color)}`,{},{headers:this.authHeader});
}

  updateApi(noteId: number, noteData: any): Observable<any> {
    return this.http.put(`https://localhost:7004/api/usernotes/${noteId}`, noteData, { headers: this.authHeader });
  }

  deleteApi(noteId: number): Observable<any> {
    return this.http.delete(`https://localhost:7004/api/usernotes/${noteId}`, { headers: this.authHeader });
  }
}

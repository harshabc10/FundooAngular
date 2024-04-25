import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpService: HttpService) { }


  getAllNotesApiCall(){
    return this.httpService.getAllNotesApi()
  }

  addNotesApiCall(noteData: any) {
    return this.httpService.addNotesApi(noteData);
  }
}

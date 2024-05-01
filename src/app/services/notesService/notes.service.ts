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

  archiveApiCall(noteData: any) {
    return this.httpService.archiveApi(noteData);
 
}

trashApiCall(noteData:any){
return this.httpService.trashApi(noteData);
}

colorChangeApiCall(noteId: number, color: string) {
  return this.httpService.colorApi(noteId,color);
}

deleteApiCall(noteData:any) {
  return this.httpService.deleteApi(noteData);
}
}

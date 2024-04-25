import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {
notesList: any = []

  constructor(private notesService:NotesService) { }

  ngOnInit(): void {
    this.notesService.getAllNotesApiCall().subscribe((response:any)=>{
      console.log(response);
      this.notesList=response.data
    },
  err=>console.log(err))
  }

  handelUpdateNotesList($event:{action:string,data:any}){
    console.log("event",$event);
    if($event.action=="create"){
      this.notesList=[...this.notesList,$event.data]
    }
    else if($event.action=="archive"){
      this.notesList=this.notesList.filter((ele:any)=>ele.id!=$event.data.id)
    }
  }

}

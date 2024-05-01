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
      this.notesList=response.data.filter((ele:any)=>!ele.isArchive && !ele.isTrash)
    },
  err=>console.log(err))
  }

  handelUpdateNotesList($event:{action:string,data:any}){
    console.log("event",$event);
    if($event.action=="create"){
      this.notesList=[...this.notesList,$event.data]
    }
    else if($event.action=="archive" || $event.action=="trash"){
      this.notesList=this.notesList.filter((ele:any)=>ele.id!=$event.data.id)
    }
    else if($event.action=="color" || $event.action=="update"){
      this.notesList=this.notesList.map((ele:any)=>{
        if(ele.id==$event.data.id)
          return $event.data
        else
        return ele
      })

    }

  }

}

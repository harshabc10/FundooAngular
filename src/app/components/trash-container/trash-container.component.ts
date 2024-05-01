import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.scss']
})
export class TrashContainerComponent implements OnInit {

  trashList: any = [];

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notesService.getAllNotesApiCall().subscribe(
      (response: any) => {
        console.log(response);
        this.trashList = response.data.filter((ele: any)=>ele.isTrash);
      },
      (err) => console.log(err)
    );
  }

  handelUpdateTrashList($event: { action: string; data: any }) {
    console.log('event', $event);
    if ($event.action == 'delete' || $event.action == 'trash') {
      this.trashList = this.trashList.filter(
        (ele: any) => ele.id != $event.data.id
      );
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss'],
})
export class ArchiveContainerComponent implements OnInit {
  archiveList: any = [];

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notesService.getAllNotesApiCall().subscribe(
      (response: any) => {
        console.log(response);
        this.archiveList = response.data.filter((ele: any) => ele.isArchive);
      },
      (err) => console.log(err)
    );
  }

  handelUpdateArchiveList($event: { action: string; data: any }) {
    console.log('event', $event);
    if ($event.action == 'archive' || $event.action == 'trash') {
      this.archiveList = this.archiveList.filter(
        (ele: any) => ele.id != $event.data.id
      );
    }
  }
}

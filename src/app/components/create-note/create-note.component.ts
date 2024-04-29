import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NotesService } from 'src/app/services/notesService/notes.service';
import { ARCHIVE_ICON, BRUSH_ICON, COLLABRATOR_ICON, COLOR_PALATTE_ICON, IMG_ICON, LIST_VIEW_ICON, MORE_ICON, PIN_ICON, REDO_ICON, REMINDER_ICON, UNDO_ICON } from 'src/assets/svg-icons';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  title: string = "";
  description: string = "";

  createNote: boolean = false;

//  @Output() handleUpdateList: EventEmitter<any> = new EventEmitter();

@Output() updateList=new EventEmitter<any>();

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private notesService: NotesService
  ) {
    iconRegistry.addSvgIconLiteral("list-icon", sanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON));
    iconRegistry.addSvgIconLiteral("brush-icon", sanitizer.bypassSecurityTrustHtml(BRUSH_ICON));
    iconRegistry.addSvgIconLiteral("image-icon", sanitizer.bypassSecurityTrustHtml(IMG_ICON));
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON));
    iconRegistry.addSvgIconLiteral("collabrator-icon", sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON));
    iconRegistry.addSvgIconLiteral("color-icon", sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON));
    iconRegistry.addSvgIconLiteral("pin-icon", sanitizer.bypassSecurityTrustHtml(PIN_ICON));
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON));
    iconRegistry.addSvgIconLiteral('more-icon', sanitizer.bypassSecurityTrustHtml(MORE_ICON));
    iconRegistry.addSvgIconLiteral('undo-icon', sanitizer.bypassSecurityTrustHtml(UNDO_ICON));
    iconRegistry.addSvgIconLiteral('redo-icon', sanitizer.bypassSecurityTrustHtml(REDO_ICON));
  }

  ngOnInit(): void {
  }

  handelCreateNote(action:string){
    this.createNote=!this.createNote
    if(action=="close" && this.title || this.description ){
      

      this.notesService.addNotesApiCall({ title: this.title, description: this.description , color:"#fffff", ImagePaths:"abc.jpg"}).subscribe(
            res => {
              console.log('Note added successfully:', res);
              this.updateList.emit({action:"create",data:res.data});
              //this.handleUpdateList.emit({ action: "create", data: res.data });
            },
            err => {
              console.error('Error adding note:', err);
              // Handle the error, such as displaying an error message to the user.
            }
          );
    }
  }


  // handelCreateNote() {
  //   if (!this.createNote || this.title.trim() === "" || this.description.trim() === "") {
  //     this.createNote = !this.createNote;
  //     return;
  //   }

  //   this.notesService.addNotesApiCall({ title: this.title, description: this.description }).subscribe(
  //     res => {
  //       console.log('Note added successfully:', res);
  //       this.handleUpdateList.emit({ action: "create", data: res.data });
  //     },
  //     error => {
  //       console.error('Error adding note:', error);
  //       // Handle the error, such as displaying an error message to the user.
  //     }
  //   );

  //   this.createNote = !this.createNote;
  //   this.title = "";
  //   this.description = "";
  // }
}

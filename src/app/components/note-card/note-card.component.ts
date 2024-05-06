import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NotesService } from 'src/app/services/notesService/notes.service';
import { ARCHIVE_ICON, COLLABRATOR_ICON, COLOR_PALATTE_ICON, DELETE_FOREVER_ICON, IMG_ICON, MORE_ICON, PIN_ICON, REMINDER_ICON, RESTORE_ICON, UNARCHIVE_ICON } from 'src/assets/svg-icons';
import { EditnoteComponent } from '../editnote/editnote.component';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Subscription, subscribeOn } from 'rxjs';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  // Add this line to define the showIcons property
  @Input() notesData! : any [];

  @Output() updateList=new EventEmitter<any>();

  @Input() container!:string

  searchString:string=''
  subscription!:Subscription


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private noteService: NotesService,private dialogue: MatDialog, private dataService: DataService) {
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON)),
    iconRegistry.addSvgIconLiteral("collabrator-icon", sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON)),
    iconRegistry.addSvgIconLiteral("color-icon", sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON)),
    iconRegistry.addSvgIconLiteral('img-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON)),
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON)),
    iconRegistry.addSvgIconLiteral('more-icon', sanitizer.bypassSecurityTrustHtml(MORE_ICON)),
    iconRegistry.addSvgIconLiteral('pin-icon', sanitizer.bypassSecurityTrustHtml(PIN_ICON)),
    iconRegistry.addSvgIconLiteral('unarchive-icon', sanitizer.bypassSecurityTrustHtml(UNARCHIVE_ICON)),
    iconRegistry.addSvgIconLiteral('delete-icon', sanitizer.bypassSecurityTrustHtml(DELETE_FOREVER_ICON)),
    iconRegistry.addSvgIconLiteral('restore-icon', sanitizer.bypassSecurityTrustHtml(RESTORE_ICON)) 
  }

  ngOnInit(): void {
    this.subscription=this.dataService.currSearchString.subscribe(response=>{
      this.searchString=response
    })
  }


 
  handleNoteIconsClick(action: string, note: any, color?: string) {
    if(action=="archive" || action === "unarchive"){
      this.noteService.archiveApiCall({noteId:note.id}).subscribe(response => {
      this.updateList.emit({action:action, data:note});
      });
    }
    else if(action=="trash"){
      this.noteService.trashApiCall({noteId:note.id}).subscribe(response => {
        this.updateList.emit({action:action, data:note});
      });
    }
    else if(action=="color" && color){
      this.noteService.colorChangeApiCall(note.id, color).subscribe(response => {
        this.updateList.emit({ action: action, data: { ...note, color: color } });
      });
}
else if (action == "delete") {
  this.noteService.deleteApiCall(note.id).subscribe(response => {
    this.updateList.emit({ action: action, data: note });
  });
}

  }

  handelEditNote(noteData: any) {
    const dialogRef = this.dialogue.open(EditnoteComponent, {
      data: noteData
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.noteService.updateApiCall(noteData.id, result).subscribe(response => {
          this.updateList.emit({ action: 'update', data: result });
        });
      }
    });
  }
}
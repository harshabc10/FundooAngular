import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ARCHIVE_ICON, COLLABRATOR_ICON, COLOR_PALATTE_ICON, IMG_ICON, MORE_ICON, PIN_ICON, REMINDER_ICON } from 'src/assets/svg-icons';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  showIcons = false; // Add this line to define the showIcons property


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("collabrator-icon", sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON))
    iconRegistry.addSvgIconLiteral("color-icon", sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON))
    iconRegistry.addSvgIconLiteral('img-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON))
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral("pin-icon", sanitizer.bypassSecurityTrustHtml(PIN_ICON))
    iconRegistry.addSvgIconLiteral('more-icon', sanitizer.bypassSecurityTrustHtml(MORE_ICON))    
  }

  ngOnInit(): void {
  }


 
  handleNoteIconsClick(action: string, note: any) {
    // Implement your logic for handling icon clicks here
  }
}
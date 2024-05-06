import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';



import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { FundooHeaderComponent } from './components/fundoo-header/fundoo-header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { ArchiveContainerComponent } from './components/archive-container/archive-container.component';
import { TrashContainerComponent } from './components/trash-container/trash-container.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EditnoteComponent } from './components/editnote/editnote.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SearchPipe } from './pipe/search.pipe';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CreateNoteComponent,
    NoteCardComponent,
    FundooHeaderComponent,
    SideNavComponent,
    NotesContainerComponent,
    ArchiveContainerComponent,
    TrashContainerComponent,
    DashboardComponent,
    EditnoteComponent,
    SearchPipe
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

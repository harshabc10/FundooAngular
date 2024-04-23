import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FundooHeaderComponent } from './components/fundoo-header/fundoo-header.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { ArchiveContainerComponent } from './components/archive-container/archive-container.component';
import { TrashContainerComponent } from './components/trash-container/trash-container.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [ 
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'signUp',
    component: SignupComponent,
  },
  {
    path: 'dashboard',
    component : DashboardComponent,
    children: [
      {
        path: 'notes',
        component:NotesContainerComponent
      },
      {
        path:'archive',
        component:ArchiveContainerComponent
      },
      {
        path:'trash',
        component:TrashContainerComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

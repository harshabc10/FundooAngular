import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.scss']
})
export class EditnoteComponent implements OnInit {
title:string=''
description:string=''
createNote: boolean = false;



  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EditnoteComponent>) {
    this.title=data.title
    this.description=data.description
    console.log(data);

 
   }

  ngOnInit(): void {
  }

  handelEditNote(){
    this.dialogRef.close({...this.data,title:this.title,description:this.description})
  }
  handleNoteIconsClick(string:any){

  }

}

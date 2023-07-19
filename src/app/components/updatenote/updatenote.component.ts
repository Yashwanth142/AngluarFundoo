import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/NotesServices/note.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent {
  title: string;
  description: string;
  color:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<UpdatenoteComponent>, private noteservice: NoteService) {
    this.title = data.title;
    this.description = data.description;
    this.color=data.color;
  }
  refresh(bgcolor: any) {
    this.color= bgcolor;
  }

  close() {
    let reqdata = {
      noteId: this.data.id,
      title: this.title,
      description: this.description,
    }
    console.log(reqdata);
      this.noteservice.updatenotes(reqdata).subscribe((result: any) => {
        console.log("update: ", result.data);
        
        this.dialogRef.close();
      })

}
}
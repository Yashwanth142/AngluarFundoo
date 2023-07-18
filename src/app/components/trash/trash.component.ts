import { Component } from '@angular/core';
import { NoteService } from 'src/app/Services/NotesServices/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent {
tarshData:any
constructor(private note:NoteService){}
ngOnInit() {
  this.gettrash()
}
gettrash(){
  this.note.getTrashnotes().subscribe(
    (res:any) => {
      console.log(res.data.data);
       this.tarshData=res.data.data
  })
}
}

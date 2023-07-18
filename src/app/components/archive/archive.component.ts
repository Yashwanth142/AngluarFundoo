import { Component } from '@angular/core';
import { NoteService } from 'src/app/Services/NotesServices/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent {
  archiveData:any
  constructor(private note:NoteService){}
  ngOnInit() {
    this.gettrash()
  }
  gettrash(){
    this.note.getArchivenotes().subscribe(
      (res:any) => {
        console.log(res.data.data);
         this.archiveData=res.data.data
    })
  }
}

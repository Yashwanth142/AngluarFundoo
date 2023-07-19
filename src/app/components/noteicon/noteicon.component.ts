import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/NotesServices/note.service';

@Component({
  selector: 'app-noteicon',
  templateUrl: './noteicon.component.html',
  styleUrls: ['./noteicon.component.scss']
})
export class NoteiconComponent {
  @Input() noteinfo:any
  @Input() trashview:any
  @Output() refresh = new EventEmitter();
constructor(private note:NoteService){}
ngOnInit() {

}
colorData:any = [
  {code:'#F38B83'},
  {code: '#FBBC05'},
  {code: '#FEF474'},
  {code: '#CDFF90'},
  {code: '#A6FEEB'},
  {code: '#CAF1F8'},
  {code: '#AECAFB'},
  {code: '#D7AFFA'},
  {code: '#FDCFE8'},
  {code: '#E6C8A9'},
  {code: '#FFFFFF'},
  {code: '#E9EBED'}
];
archive(){
  let reqdata={
    noteIdList:[this.noteinfo.id],
    isArchived: true
  }
  console.log(this.noteinfo.id)
 this.note.archive(reqdata).subscribe((res:any)=>{
  console.log(res);
})
}

trash(){
  let reqdata={
    noteIdList:[this.noteinfo.id],
    isDeleted: true
  }
  console.log(this.noteinfo.id)
 this.note.trash(reqdata).subscribe((res:any)=>{
  console.log(res);
})
}

  ColorCode(colorInfo:any)
  {
    this.refresh.emit(colorInfo);
    
    if(this.noteinfo !=null){
    console.log(this.noteinfo.id)
    let data = {
      noteIdList:[this.noteinfo.id],
      color : colorInfo
    }   
    console.log(data,"colorInfo")
    this.note.ColorChange(data).subscribe((success:any) => {
      console.log("Success", success);  
    })
   }
  }

}

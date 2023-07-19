import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/Services/NotesServices/note.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent {
  firstView : boolean=true;
  NotesinData!:FormGroup;
  color : any
  @Output() message =new EventEmitter();
  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar,private noteServices:NoteService) { }

  ngOnInit(): void {
    this.NotesinData = this.formBuilder.group({
      title: "",
      description: ""
    })
  }
  SecondView()
  {
    this.firstView = false;
  }
  refresh(color: string){
    this.color=color;
  }
  Close(){
    let notesData={
      title:this.NotesinData.value.title,
      description:this.NotesinData.value.description,
      color:this.color
    };
    console.log(notesData);
    if(notesData.title != "" && notesData.description != "")
    {
      this.noteServices.CreateNotes(notesData).subscribe(
        (response:any) => {
          console.log(response)
          this._snackBar.open("Notes created", "ok", { duration: 3000 });
          this.firstView = true;
          this.color=''
          this.NotesinData.reset();
          this.message.emit();
        },
        (error:any) => {
          this._snackBar.open("Error " + error.status + " " + error.statusText, "try again", { duration: 3000 });
        });
    }else{
      this.firstView=true
      this.color=''
    }
  }
}

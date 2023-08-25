import { Component,EventEmitter,Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {UpdatenoteComponent} from '../updatenote/updatenote.component';
import { DatashareService } from 'src/app/Services/datashare/datashare.service';
import { NoteService } from 'src/app/Services/NotesServices/note.service';
@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent {
  @Input() childData:any;
  @Input() trash:any;
  @Output() refreshdata = new EventEmitter();
  @Output() refreshdatatrash = new EventEmitter();
  @Output() updatenoteEvent = new EventEmitter<Object>();
  @Input() displayallnotes: any;
  
  searchText:any
  data3:any=[]
  view: boolean = true;
  excludedData = 'GMT+0000 (UTC)';

  constructor(public dialog: MatDialog,private dataService:DatashareService,private noteservice:NoteService) { }
   

    ngOnInit(): void {  
    this.displaySearch()
    } 
    refresh(event:any){
      this.refreshdata.emit();
    }
    trashrefresh(event:any){
      this.refreshdatatrash.emit();
    }
    openDialog(note: any) {
      const dialogRef = this.dialog.open(UpdatenoteComponent, { data: note, });
      dialogRef.afterClosed().subscribe((result) => {
        //console.log("Dialog result:",result);
         this.refreshdata.emit();
      });
    }
    displaySearch(){
      this.dataService.currentMessage.subscribe((result) => {
        this.searchText = result
      });
    }

    changeDisplayView() {
      this.dataService.currentView.subscribe((res: any) => {
        console.log(res);
        this.view = res;
      })
    }
  
    remove(labelId: any, noteId: any) {
      this.noteservice.removeLabelToNotes(noteId, labelId).subscribe((res: any) => {
        console.log(res);
        this.refreshdata.emit();
        this.updatenoteEvent.emit(); 
      })
    }
    removeReminder(Id: any, reminder: any) {
      let reqdata = {
        noteIdList: [Id],
       //reminder:reminder
      }
      this.noteservice.removeReminder(reqdata).subscribe((res: any) => {
        console.log(res, "removed");
        this.updatenoteEvent.emit();
        this.refreshdata.emit();
      })
    }
}

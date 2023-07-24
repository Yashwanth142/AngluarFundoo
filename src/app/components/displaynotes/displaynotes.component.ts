import { Component,EventEmitter,Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {UpdatenoteComponent} from '../updatenote/updatenote.component';
import { DatashareService } from 'src/app/Services/datashare/datashare.service';
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
  searchText:any
 constructor(public dialog: MatDialog,private dataService:DatashareService) { }

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

}

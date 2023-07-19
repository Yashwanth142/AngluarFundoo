import { Component,EventEmitter,Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {UpdatenoteComponent} from '../updatenote/updatenote.component';
@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent {
  @Input() childData:any;
  @Input() trash:any;
  @Output() refreshdata = new EventEmitter();
    
 constructor(public dialog: MatDialog ) { }
    ngOnInit(): void {  
     
    } 
    refresh(event:any){
      this.refreshdata.emit();
    }
    openDialog(note: any) {
      const dialogRef = this.dialog.open(UpdatenoteComponent, { data: note, });
      dialogRef.afterClosed().subscribe((result) => {
        //console.log("Dialog result:",result);
         this.refreshdata.emit();
      });
    }
}

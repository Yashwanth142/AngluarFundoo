import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent {
  @Input() childData:any;
 @Output() refreshdata = new EventEmitter();
    constructor() { }
    ngOnInit(): void {  
    } 
    refresh(event:any){
      this.refreshdata.emit();
    }
}

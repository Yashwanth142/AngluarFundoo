import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/NotesServices/note.service';
import { DatashareService } from 'src/app/Services/datashare/datashare.service';

@Component({
  selector: 'app-noteicon',
  templateUrl: './noteicon.component.html',
  styleUrls: ['./noteicon.component.scss'],
})
export class NoteiconComponent {
  @Input() noteinfo: any;
  @Input() trashview: any;
  @Input() newNote: boolean = false;
  @Output() refresh = new EventEmitter();
  @Output() refreshtrash = new EventEmitter();

  labelArray: any = []
  checkedLabels: any = [];
  labelTitle: boolean = true;
  constructor(private note: NoteService,private dataService:DatashareService) {}
  ngOnInit() {
    this.getLabelData()
  }
  colorData: any = [
    { code: '#F38B83' },
    { code: '#FBBC05' },
    { code: '#FEF474' },
    { code: '#CDFF90' },
    { code: '#A6FEEB' },
    { code: '#CAF1F8' },
    { code: '#AECAFB' },
    { code: '#D7AFFA' },
    { code: '#FDCFE8' },
    { code: '#E6C8A9' },
    { code: '#FFFFFF' },
    { code: '#E9EBED' },
  ];
  archive() {
    let reqdata = {
      noteIdList: [this.noteinfo.id],
      isArchived: true,
    };
    console.log(this.noteinfo.id);
    this.note.archive(reqdata).subscribe((res: any) => {
      console.log(res);
      this.refresh.emit();
    });
  }

  trash() {
    let reqdata = {
      noteIdList: [this.noteinfo.id],
      isDeleted: true,
    };
    console.log(this.noteinfo.id);
    this.note.trash(reqdata).subscribe((res: any) => {
      console.log(res);
      this.refresh.emit();
    });
  }

  ColorCode(colorInfo: any) {
    this.refresh.emit(colorInfo);

    if (this.noteinfo != null) {
      console.log(this.noteinfo.id);
      let data = {
        noteIdList: [this.noteinfo.id],
        color: colorInfo,
      };
      console.log(data, 'colorInfo');
      this.note.ColorChange(data).subscribe((success: any) => {
        console.log('Success', success);
      });
    }
  }
  DeleteForever() {
    let reqdata = {
      noteIdList: [this.noteinfo.id],
    };
    this.note.DeleteForever(reqdata).subscribe((success: any) => {
      console.log('Success', success);
      this.refreshtrash.emit();
    });
  }
  restore() {
    let reqdata = {
      noteIdList: [this.noteinfo.id],
      isDeleted: false
    };
    console.log(this.noteinfo.id);
    this.note.trash(reqdata).subscribe((res: any) => {
      console.log(res);
      this.refreshtrash.emit();
    });
  }
  getLabelData() {
    if (!this.newNote) {
      this.dataService.currentLabelMessage.subscribe((res) => {
        this.labelArray = res;
      })
    }
  }
  onMenuClosed() {
    this.refresh.emit();
  }
  
  selectLabel(event: any, label: any) {
    if (event.target.checked) {
      let reqdata = {
        noteId: [this.noteinfo.id],
        lableId: label
      }
      // console.log(reqdata.noteId);
      // console.log(label);
      this.note.addLabeltoNotes(reqdata.noteId, label).subscribe((result) => {
        console.log("label added", result);

      })
    }
  }
  searchLabel(event: any) {
    console.log(event.target.value);
  }

}

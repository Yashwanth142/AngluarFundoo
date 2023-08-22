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

  //date = new FormControl(new Date());
  date = new Date();
  selectDate = new Date();
  remindDate = new Date();
  remindTime: any
  remindTime2: number = 8

  labelArray: any = []
  checkedLabels: any = [];
  labelTitle: boolean = true;
  isChecked: boolean = true;
  daysUntilNextMonday: any
  isRemind: boolean = true;

  showOptions: boolean = false;

  constructor(private note: NoteService, private dataService: DatashareService) { }
  ngOnInit() {
    this.getLabelData()
    // this.checkedLabels = this.noteinfo.noteLabels
    this.daysUntilNextMonday = (1 + 7 - this.date.getDay()) % 7;
    //console.log("mon", this.daysUntilNextMonday);
    if (this.daysUntilNextMonday === 0) {
      this.daysUntilNextMonday = 7;
    }
    this.remindDate.setHours(20, 0, 0, 0)
    if (this.date >= this.remindDate) {
      this.isRemind = false;
    }
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
    //  console.log(this.noteinfo.id);
      let data = {
        noteIdList: [this.noteinfo.id],
        color: colorInfo,
      };
     // console.log(data, 'colorInfo');
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
  toggleOptions() {
    this.showOptions = !this.showOptions;
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

  setDate(noOfDays: any) {
    const remainderDate = new Date()
    remainderDate.setDate(remainderDate.getDate() + noOfDays);
    if (noOfDays === 0) {
      console.log(noOfDays);
      remainderDate.setHours(20, 0, 0, 0);
      console.log(remainderDate.toLocaleTimeString());
    }
    else {
      console.log(noOfDays);
      remainderDate.setHours(8, 0, 0, 0);
    }
    remainderDate.setHours(remainderDate.getHours() + 5);
    remainderDate.setMinutes(remainderDate.getMinutes() + 30);

    if (remainderDate.getTime() <= this.date.getTime()) {
      remainderDate.setDate(remainderDate.getDate() + noOfDays);
    }
    console.log(remainderDate);

    console.log(this.selectDate);

    let reqdata = {
      noteIdList: [this.noteinfo.id],
      reminder: remainderDate
    }
    console.log(reqdata);

    this.note.AddReminder(reqdata).subscribe((res) => {
      console.log(res);
      this.refresh.emit();
    })
  }
  AddNoteReminder() {

    console.log(this.selectDate);

    if (this.remindTime) {
      var [hours, minutes] = this.remindTime.split(':');
      console.log(this.remindTime, "1");

      console.log('Hours:', hours);
      console.log('Minutes:', minutes);
      this.selectDate.setHours(this.selectDate.getHours() + hours);
      this.selectDate.setMinutes(this.selectDate.getMinutes() + minutes);
    }
    else {
      console.log(this.remindTime2, "2");
      this.selectDate.setHours(this.remindTime2, 0, 0, 0);
    }
    this.selectDate.setHours(this.selectDate.getHours() + 5);
    this.selectDate.setMinutes(this.selectDate.getMinutes() + 30);
    let reqdata = {
      noteIdList: [this.noteinfo.id],
      reminder: this.selectDate
    }
    console.log(reqdata);

    this.note.AddReminder(reqdata).subscribe((res) => {
      console.log(res);
      this.refresh.emit();
    })
  }
  AddNoteReminderNextWeek() {
    const currentDate = new Date();
    const nextWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7);
    nextWeek.setHours(8, 0, 0, 0);
    if (nextWeek.getTime() <= currentDate.getTime()) {
      nextWeek.setDate(nextWeek.getDate() + 1);
    }

    let reqdata = {
      noteIdList: [this.noteinfo.id],
      reminder: nextWeek
    }
    console.log(reqdata);

    this.note.AddReminder(reqdata).subscribe((res) => {
      console.log(res);
      this.refresh.emit();
    })
  }

}

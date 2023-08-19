import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';
import { DatashareService } from 'src/app/Services/datashare/datashare.service';
import { AddProfileComponent } from '../add-profile/add-profile.component';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/NotesServices/note.service';
import { EditLabelComponent } from '../edit-label/edit-label.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  mobileQuery: MediaQueryList;
  isSelected =false;
  show: boolean = true;
  listView:boolean=false;
  user:any=[]
  labels:any;
  imageUrl:any;
  baseImageUrl="http://fundoonotes.incubation.bridgelabz.com/";

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private dataService: DatashareService, private userService:UserService,
    private route: Router,
    public dialog: MatDialog,private noteService:NoteService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
   this.getAllLabels()
   this.getImage()
  }
  searchbg(){
    this.isSelected=!this.isSelected; 
  }
  showside(e: any) {
    this.show = !this.show;
  }
  searchnote(event: any) {
    this.dataService.changeMessage(event.target.value)
  }
  logout(){
    this.userService.signout().subscribe((res:any)=>{
      this.dataService.setTokenData("");
      this.userService.setToken()
    })
  }
  openprofile() {
    const dialogRef = this.dialog.open(AddProfileComponent, {data:this.baseImageUrl});
    dialogRef.afterClosed().subscribe((result:any) => {
      console.log("Dialog result:",result);
    });
  }
  getImage(){
    this.imageUrl=this.baseImageUrl+localStorage.getItem('imageUrl')
    //console.log("image",this.imageUrl);
  }

  getAllLabels(){
    this.noteService.getNoteLabels().subscribe((res:any)=>{
      this.labels=res.data.details;
      console.log("labels",res);
      //console.log(this.labels);
      this.dataService.sendLabelsData(this.labels)
    })
  }

  redirectToLabel(label:any){
    console.log(label);
    this.noteService.getNotesListbyLabel(label).subscribe((res:any)=>{
      //console.log(res);
      //console.log(res.data.data);
      this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.route.navigate(['home/Label/'+label]);
      });
      //console.log("refresh");
    })
    
  }

  openDialog(){
    const dialogRef = this.dialog.open(EditLabelComponent, {data:this.labels});

    dialogRef.componentInstance.onDelete.subscribe((res:any)=>{
     // console.log("all Labels");
        this.getAllLabels()
        this.labels=res;
      });
      dialogRef.componentInstance.onCreate.subscribe((res:any)=>{
       // console.log("all Labels");
          this.getAllLabels()
        });

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllLabels()
    });
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}

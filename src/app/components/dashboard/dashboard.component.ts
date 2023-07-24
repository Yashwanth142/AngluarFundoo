import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';
import { DatashareService } from 'src/app/Services/datashare/datashare.service';
import { AddProfileComponent } from '../add-profile/add-profile.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(public dialog: MatDialog,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private dataService:DatashareService,private route: Router,private userService:UserService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
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
    console.log("image",this.imageUrl);
  }
}

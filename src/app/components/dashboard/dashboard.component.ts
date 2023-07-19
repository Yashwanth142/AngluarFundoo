import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';
import { DatashareService } from 'src/app/Services/datashare/datashare.service';

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

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private dataService:DatashareService,private route: Router,) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
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
}

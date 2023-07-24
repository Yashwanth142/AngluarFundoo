import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthguardService } from './Services/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authguardService:AuthguardService, private router:Router){}
  
  canActivate():boolean{
    if (!this.authguardService.gettoken()) {
      console.log("Using AuthGuard");
      
      this.router.navigateByUrl('/login');
      return false
    }
    return true
  }
  
}

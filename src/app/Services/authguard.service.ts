import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor() { }
  gettoken(){  
    let token=localStorage.getItem('token');
    return token; 
    }  
}

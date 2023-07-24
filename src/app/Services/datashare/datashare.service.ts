import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor() { }
  private messageSource = new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable();

  private tokenData = new BehaviorSubject("");
  currentToken = this.tokenData.asObservable();

  private Url = new BehaviorSubject('');
  currentUrl = this.Url.asObservable();

  changeMessage(message: any) {
    this.messageSource.next(message);
  }
  
  setTokenData(message: any){
    this.tokenData.next(message);
  }

  sendUrl(message: any){
    this.Url.next(message);
  }
}

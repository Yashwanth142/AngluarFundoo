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

  private labelData = new BehaviorSubject("");
  currentLabelMessage = this.labelData.asObservable();

  private viewOption = new BehaviorSubject("");
  currentView = this.viewOption.asObservable();

  changeMessage(message: any) {
    this.messageSource.next(message);
  }
  
  setTokenData(message: any){
    this.tokenData.next(message);
  }

  sendUrl(message: any){
    this.Url.next(message);
  }

  ChangeView(message: any){
    this.viewOption.next(message);
  }

  sendLabelsData(message: any){
    this.labelData.next(message);
  }
}

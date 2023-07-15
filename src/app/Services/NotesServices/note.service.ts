import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
token:any
  constructor(private httpService:HttpService) { }
  CreateNotes(reqdata:any){
    this.token=localStorage.getItem('token');
    let httpHeadersOption = {
      headers : new HttpHeaders({ 
        contentType : 'application/json',
        authorization : this.token
      })
    }
    return this.httpService.postService('notes/addNotes', reqdata, true, httpHeadersOption)
  }
  getallNotes(){
    this.token=localStorage.getItem('token');
    let httpHeadersOption = {
      headers : new HttpHeaders({ 
        contentType : 'application/json',
        authorization : this.token
      })
    }
    return this.httpService.getService('notes/getNotesList', true, httpHeadersOption)
  }
}

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

  archive(reqdata:any){
    this.token=localStorage.getItem('token');
    let httpHeadersOption = {
      headers : new HttpHeaders({ 
        contentType : 'application/json',
        authorization : this.token
      })
    }
    return this.httpService.postService('notes/archiveNotes',reqdata, true, httpHeadersOption)
  }

  trash(reqdata:any){
    this.token=localStorage.getItem('token');
    let httpHeadersOption = {
      headers : new HttpHeaders({ 
        contentType : 'application/json',
        authorization : this.token
      })
    }
    return this.httpService.postService('notes/trashNotes',reqdata, true, httpHeadersOption)
  }

  getArchivenotes() {
    this.token = localStorage.getItem('token');
    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token,
      })
    }
    return this.httpService.getService('notes/getArchiveNotesList', true, httpHeadersOption)
  }

  getTrashnotes() {
    this.token = localStorage.getItem('token');
    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token,
      })
    }
    return this.httpService.getService('notes/getTrashNotesList', true, httpHeadersOption)
  }

  ColorChange(reqdata:any){
    this.token=localStorage.getItem('token');
    let httpHeadersOption = {
      headers : new HttpHeaders({ 
        contentType : 'application/json',
        authorization : this.token
      })
    }
    return this.httpService.postService('notes/changesColorNotes',reqdata, true, httpHeadersOption)
  }

  updatenotes(reqdata:any){
    this.token=localStorage.getItem('token');
    let httpHeadersOption = {
      headers : new HttpHeaders({ 
        contentType : 'application/json',
        authorization : this.token
      })
    }
    return this.httpService.postService('notes/updateNotes',reqdata, true, httpHeadersOption)
  }
  DeleteForever(reqdata:any){
    this.token=localStorage.getItem('token');
    let httpHeadersOption = {
      headers : new HttpHeaders({ 
        contentType : 'application/json',
        authorization : this.token
      })
    }
    return this.httpService.postService('notes/deleteForeverNotes',reqdata, true, httpHeadersOption)
  }
  restore(reqdata:any){
    this.token=localStorage.getItem('token');
    let httpHeadersOption = {
      headers : new HttpHeaders({ 
        contentType : 'application/json',
        authorization : this.token
      })
    }
    return this.httpService.postService('notes/deleteForeverNotes',reqdata, true, httpHeadersOption)
  }
}



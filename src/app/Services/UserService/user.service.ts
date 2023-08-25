import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any

  constructor(private httpService: HttpService) { }

  signupService(reqSignup: any) {
    let httpHeadersOption = {
      headers : new HttpHeaders({ 
        contentType : 'application/json',
        authorization : this.token
      })
    }
    return this.httpService.postService('user/userSignup', reqSignup, false, httpHeadersOption)
  }

  loginService(reqdata:any){
    let httpHeadersOption = {
      headers : new HttpHeaders({ 
        contentType : 'application/json',
        authorization : this.token
      })
    }
    return this.httpService.postService('user/login', reqdata, false, httpHeadersOption)
  }
  signout(){
    this.token=localStorage.getItem('token')
    let httpHeadersOption = {
      headers : new HttpHeaders({ 
        contentType : 'application/json',
        authorization : this.token
      })
    }
    return this.httpService.postService('user/logout?access_token='+this.token, '', true, httpHeadersOption)
  }
  setToken(){
    this.token=localStorage.setItem('token',"")
  }
  uploadProfilePic(reqdata:any){
    this.token=localStorage.getItem('token')
    let httpHeadersOption = {
      headers : new HttpHeaders({ 
        contentType : 'multipart/form-data',
        authorization : this.token
      })
    }
    return this.httpService.postService('user/uploadProfileImage?access_token='+this.token, reqdata, true, httpHeadersOption)
  }
  searchUserList(reqdata:any){

    this.token=localStorage.getItem('token')
    let httpHeadersOption = {
      headers : new HttpHeaders({ 
        contentType : 'application/json',
        authorization : this.token
      })
    }
    return this.httpService.postService('user/searchUserList', reqdata, true, httpHeadersOption)
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comments } from '../models/comments';
import { Publication } from '../models/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http:HttpClient) { }

  public getUser(){
    return this.http.get("http://localhost:8080/pi/RetrieveUser");
  }
  public getUserByID(id:any){
    return this.http.get("http://localhost:8080/pi/getuserById/"+id);
  }
  public getUserByname(name:string){
    return this.http.get("http://localhost:8080/pi/getuserbyname/"+name);
  }

  public AddPublication(pub:Publication,id:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.post("http://localhost:8091/api/AddPublication",pub,httpOptions);
  }

  public getpubALaUne(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.get("http://localhost:8091/api/GetPubAlaune",httpOptions);
  }
  public getLatestpub(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.get("http://localhost:8091/api/getLatestpub",httpOptions);
  }
  public getpubNumber(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.get("http://localhost:8091/api/PubNumber",httpOptions);
  }
  public getpubdetails(id:number){
    return this.http.get("http://localhost:8091/api/RetrievePublication/"+id);
  }
  public getCommentsById(id:number){

     const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.get("http://localhost:8091/api/RetrieveComments/"+id,httpOptions);
  }
  public AddComments(user_id:number,pub_id:number,com:Comments){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.post<Comments>("http://localhost:8091/api/AddComments/"+user_id+"/"+pub_id,com,httpOptions);
  }
  public Addlikepublication(id:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.put("http://localhost:8091/api/AddLikeposts/"+id,{},httpOptions);
  }
  public Adddislikepublication(id:number){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.put("http://localhost:8091/api/AdddisLikeposts/"+id,{},httpOptions);
  }
  public Addlikecomments(id:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.put("http://localhost:8091/api/AddLikecomments/"+id,{},httpOptions);
  }
  public deleteComments(id:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.delete("http://localhost:8091/api/deleteComment/"+id,httpOptions);
  }
  public getcommentbyid(id:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.delete("http://localhost:8091/api/getcommentbyId/"+id),httpOptions;
  }
  public updatecomment(com: Comments, id:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.put("http://localhost:8091/api/updatecomment/"+id,com,httpOptions);
  }
}

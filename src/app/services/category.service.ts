import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 // constructor() { }
  
 constructor(private http:HttpClient) { }

 getAllVCAtegoris() : Observable<Category[]>{
  /* const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
     })
   };*/
   return this.http.get<Category[]>("http://localhost:8091/api/cat");
 }

 putcategory(id:number, cat : Category){
  
  /* const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
     })
   };*/
   return this.http.put("http://localhost:8091/api/putcat/" +id,Category);
 }

deletecat(id:number){


/* const httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
   })
 };*/

   return  this.http.delete("http://localhost:8091/api/cat" + id);
}
   
 getatbyid2(id:number):Observable<Category>{
  /* const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
     })
   };*/
   return this.http.get<Category>("http://localhost:8091/api/cat/" +id);
 }

 getatbyid(id:number):any{
  /* const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
     })
   };*/
   return this.http.get<any>("http://localhost:8091/api/cat/" +id);
 }

 addCategory(cat : Category){

  /* const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
     })
   };*/

   return this.http.post("http://localhost:8091/api/add",cat);
   


 }

  
}

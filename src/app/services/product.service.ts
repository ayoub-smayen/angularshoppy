import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import {  environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

 // constructor() { }


  
 constructor(private http: HttpClient) { }






  
 //environment.BACKEND_URL+ ,httpOptions)
    getAllproducts():Observable<Product[]>{
   /*  const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
       })
     };*/
 
     return this.http.get<Product[]>(  environment.BACKEND_URL + "api/products1");
    }
 
 //,httpOptions
    addProductr(pr :  Product){
   /*  const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
       })
     };*/
     
     return this.http.post<Product>(environment.BACKEND_URL +"api/addprowithImag",pr);
    }
 
 
    getProductSearchable(productname){
   /*  const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
       })
     };*/
 
     return this.http.get<Product[]>(environment.BACKEND_URL + "api/ser?productname=" + productname);
    }
 
    getAllproducts2():Observable<Product[]>{
   /*  const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
       //  'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
       })
     };*/
 
     return this.http.get<Product[]>(environment.BACKEND_URL +"api/productstunsi1");
    }
 ////api/products1/1
 
 getAllproducts3(id:number):Observable<Product>{
 /*  const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
     //  'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
     })
   };*/
 
   return this.http.get<Product>(environment.BACKEND_URL + "api/products1/"  +id);
  }
 
 
    getColisenattend(): Observable<any>{
   /*  const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
       })
     };*/
      return this.http.get(environment.BACKEND_URL +"api/colisEnattent");
    }


}

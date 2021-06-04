import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
class Favourite{
  data : '';

  products : Product[];
}
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {

  constructor(private http : HttpClient,private authService: AuthService, public router: Router) { }

  URL_OP2 = "http://localhost:8091/api/favourite";
  //constructor() { }   application/json
  profs: any;
  favourites : Favourite =new Favourite(); 
  getFavourite(){
  
    this.getAllPubblicities().subscribe((res)=>{

  this.favourites =res;


   this.products = this.favourites.products ;

   //alert(this.products);
/*
  this.favourites.products.forEach(el=>{
    alert(el.productname);
  })*/
//alert(res);
  
  console.log( this.favourites);
},
 
  err=>{
      console.error(err);
      this.favourites =err;
  }
   )

}
   products : Product[];
  getAllPubblicities():Observable<Favourite>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      }),
      
    };

    return this.http.get<Favourite>(this.URL_OP2 ,httpOptions);
  }


  isLoggedIn: boolean;
  username: string;
  notifications : number  ;
  p: number = 1;
  ngOnInit(): void {
    

    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getLoggedInUser();

    this.authService.loginSubject.asObservable().subscribe(() => {
      this.isLoggedIn = this.authService.isLoggedIn();
      this.username = this.authService.getLoggedInUser();

    });
    this.getFavourite();
    this.getPrifile();
    this.notifications  = this.favourites.products.length;
  }
  getPrifile(){
    this.authService.getprofile().subscribe(res=>{
      console.log(res);
      //alert(res);
      this.profs=res;
    })
  }


}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-catalogpage',
  templateUrl: './catalogpage.component.html',
  styleUrls: ['./catalogpage.component.scss']
})
export class CatalogpageComponent implements OnInit {


  products : any;
  constructor(   private prodSer : ProductService,private httpclient :  HttpClient) { this.products = [];}
  p: number = 1;
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.prodSer.getAllproducts().subscribe(res=>{
      console.log(res);
      this.products = res;
      //alert(res);
    //  window.location.href = window.location.href; 
    })
}


addDeslikes(id:number){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
    })
  };
    return this.httpclient.put("http://localhost:8091/api/dislike/"+ id,{},httpOptions).subscribe(res=>{
      console.log(res);
     // this.show();

    // this.getAllProducts();
     //window.location.href = window.location.href; 
      this.getAllProducts();
    })
}

myComment = {
  title:  '',
  bodyComment : ''
  };
addLikes(id:number){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
    })
  };
    return this.httpclient.put("http://localhost:8091/api/like/"+ id,{},httpOptions).subscribe(res=>{
      console.log(res);
     // this.show();
      //this.showFlash();
    //  window.location.href = window.location.href; 
      this.getAllProducts();
    })

}

term :string ;
myproduct : string = '';
coins : number;
em = {

  firstName : '',
  lastName : '',
  emailAddress : ''


};
favourites : any;
putFavourite(id : number){

  alert(this.favourites.favourite_id );
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
    }),
    
  };
   return this.httpclient.put("http://localhost:8091/api/affectprodfav/" + this.favourites.favourite_id +  "/" +  id , {} ,httpOptions ).subscribe

   (res=>{
     console.log(res);

     alert("you  update  your  favourite ")
   })
}

addViews(id:number){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
    })
  };
    return this.httpclient.put("http://localhost:8091/api/vues/"+ id,{},httpOptions).subscribe(res=>{
      console.log(res);
    //  this.show();
      //this.showFlash();
      window.location.href = window.location.href; 
      this.getAllProducts();
    })

}


}

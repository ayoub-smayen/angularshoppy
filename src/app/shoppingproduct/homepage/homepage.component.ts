import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private catserv : CategoryService,
    private   httpclient : HttpClient,

    private route: ActivatedRoute,

    private router  : Router,
           
            private cartService:CartService,
    
    private prodSer : ProductService) { 
      this.categories =[];this.products = [];
    }
    p: number = 1;
    term : string  ; 



    minPrice :  number=200   ;

    maxPrice : number=800   ;



  ngOnInit(): void {
    this.getAllCategoreis();
    this.getAllProducts();
    this.getFavourite();

   /* this.route.params
        .subscribe(res => {
            this.getProducts(res.id);
        })*/
  }

  getAllCategoreis(){
    this.catserv.getAllVCAtegoris().subscribe(res=>{
      console.table(res);
      this.categories=res;
    })
  }
  URL_OP2 = "http://localhost:8091/api/favourite";
  getAllPubblicities():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      }),
      
    };

    return this.httpclient.get<any>(this.URL_OP2 ,httpOptions);
  }

  getFavourite(){

    this.getAllPubblicities().subscribe((res)=>{

  this.favourites =res;

   


  // this.products = this.favourites.products ;

   //alert(this.products);

  /*this.favourites.products.forEach(el=>{
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

  getCategriesbyid(id: number){

    //alert("ok");

      this.catserv.getatbyid2(id).subscribe(res=>{
           this.category  = res ;

           this.products= this.category.pr ;
           console.log(res);

          // this.categories = [];
      })

      
     
  }

  getAllProducts(){
    this.prodSer.getAllproducts().subscribe(res=>{
      console.log(res);
      this.products = res;
      //alert(res);
    //  window.location.href = window.location.href; 
    })
}



private sub;

quantity: number = 1;
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

changeQuantity = (newQuantity:number) => {
    this.quantity = newQuantity;
};
addToCart = (product) => {
    if(this.quantity) this.cartService.addToCart({product,quantity:1})
};



addViews(id:number){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
    })
  };
    return this.httpclient.put("http://localhost:8091/api/vues/"+ id,{},httpOptions).subscribe(res=>{
      console.log(res);

      this.router.navigate(['/home/productdet', id]);
    //  this.show();
      //this.showFlash();
     // window.location.href = window.location.href; 
     // this.getAllProducts();
    })

}
ngOnDestroy() {
    this.sub.unsubscribe();
}

  category  : any ;
  categories :  Category[];
  products : any;

}

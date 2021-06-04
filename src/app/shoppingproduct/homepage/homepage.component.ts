import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private catserv : CategoryService,
    
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
  }

  getAllCategoreis(){
    this.catserv.getAllVCAtegoris().subscribe(res=>{
      console.table(res);
      this.categories=res;
    })
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

  category  : any ;
  categories :  Category[];
  products : any;

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private  route: ActivatedRoute,private http :ProductService,private httpclient : HttpClient) { }
  product1 : Product;
  products : Product[];
  ngOnInit(): void {

    

    this.getTutorial(this.route.snapshot.paramMap.get('id'));

    this.getcomments(this.route.snapshot.paramMap.get('id'));


    this.getAllproducts();
  }
  myComment = {
    title:  '',
    bodyComment : ''
    };
    private selectedFile2;
    // imgURL: any;
     imageUrl2: any;
  getAllproducts(){
    this.http.getAllproducts2().subscribe(res=>{

       this.products = res ;

       console.log(res);
    })
}
public onFileChanged2(event) {
  console.log(event);
  this.selectedFile2 = event.target.files[0];

  let reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event2) => {
    this.imageUrl2 = reader.result;
  };

}
submit(id:number) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
    })
  };


   
 
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile2, this.selectedFile2.name);

    //uploadData.append('title', this.myComment.title);

    //uploadData.append('bodyComment', this.myComment.bodyComment);


    this.httpclient.post('http://localhost:8091/api/uploadpcommentimage', uploadData, { observe: 'response' })
    .subscribe((response) => {
      console.log(response);

      if (response.status === 200) {
        return this.httpclient.post("http://localhost:8091/api/addComment/"+ id,this.myComment,httpOptions).subscribe(res=>{
      console.log(res);
     // this.getAllproducts();

    //  window.location.href  =window.location.href;
     
    })
    
       
      } else {
        console.log('Image not uploaded successfully');
      }
    }
    );
    
  
  
}

 COMMENT_URL  ="http://localhost:8091/api/comment/";

 comments :any ;

 getcomments(id){
   alert(this.COMMENT_URL+ id);
  const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
  })
};

  return this.httpclient.get(this.COMMENT_URL+ id,httpOptions).subscribe(res=>{
      console.log(res);
      alert(res);
      this.comments = res;
      this.getAllproducts();

     // window.location.href  =window.location.href;
     
    })

 }
  
getTutorial(id): void {
 this.http.getAllproducts3(id)
   .subscribe(
     data => {
       const fg = data; 
       this.product1 = fg;
       console.log(data);
       alert(data);
       
     },
     error => {
       console.log(error);
     });
}


}

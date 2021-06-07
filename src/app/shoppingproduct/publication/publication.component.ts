import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publication } from 'src/app/models/publication';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  nbre:number;
  pub!:Publication[];
  retrievedImage: any;
  user:User[];
  p:number = 1;
  users:number[] = [1,2,3,4];
  selectedFile: File;
  name:string = '';
  title:string = '';
text:string = '';
  constructor(private httpClient:HttpClient,
    private service : PublicationService,

    private   authservice :  AuthService,
    private router: Router) { 
      
   
    }

    user2 : User  ; 

getCurentUser(){

    this.authservice.getCuurentUser().subscribe(res=>{
        this.user2  = res;

        console.log(res);
    })
    
}

  ngOnInit(): void {
    this.service.getpubNumber().subscribe((data:number)=>this.nbre=data);
    this.service.getpubALaUne().subscribe((data:Publication[]) =>this.pub = data);

    this.getCurentUser();
   
  }
  go():void {
    this.router.navigate(['addpub']);
  }
  
  selectChangeHandler (event: any) {
    //update the ui
    if(event.target.value == 1){
      this.service.getpubALaUne().subscribe((data:Publication[]) =>this.pub = data);
    }
    if(event.target.value == 0){
      this.service.getLatestpub().subscribe((data:Publication[]) =>this.pub = data);
    }
  }
  public onFileChanged(event) {
    
    //Select File

    this.selectedFile = event.target.files[0];
    const uploadImageData = new FormData();

    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    //Make a call to the Spring Boot Application to save the image

    this.httpClient.post('http://localhost:8091/api/upload2', uploadImageData, { observe: 'response' })

      .subscribe();
  }
  addpub(){
    let publ = new Publication();
    
    
    publ.publication_txt = this.text;
    this.service.AddPublication(publ,this.user2.id).subscribe(()=>
    this.service.getpubALaUne().subscribe((data:Publication[]) =>this.pub = data)
    );

  }
  addlike(id){
    this.service.Addlikepublication(id).subscribe(
      ()=>
    this.service.getpubALaUne().subscribe((data:Publication[]) =>this.pub = data)
    );
  }
  adddislike(id){
    this.service.Adddislikepublication(id).subscribe(
      ()=>
    this.service.getpubALaUne().subscribe((data:Publication[]) =>this.pub = data)
    );
  }

}

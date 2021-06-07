import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {


  isLoggedIn :boolean ;
  constructor(private authService: AuthService) { }


  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    

    this.authService.loginSubject.asObservable().subscribe(() => {
      this.isLoggedIn = this.authService.isLoggedIn();
     
  }
 
    );
    

}




}

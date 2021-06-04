import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router) { }

  isLoggedIn: boolean;
  username: string;
  term :string ;

  currLat;
  currLng;
  zoom;
  origin;
  destination
  ngOnInit(): void {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {

        localStorage.setItem("lat",position.coords.latitude.toString());
        localStorage.setItem("lng",position.coords.longitude.toString());


        this.currLat = position.coords.latitude;
        this.currLng = position.coords.longitude;
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
     



      
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getLoggedInUser();

    this.authService.loginSubject.asObservable().subscribe(() => {
      this.isLoggedIn = this.authService.isLoggedIn();
      this.username = this.authService.getLoggedInUser();

    });

    this.getPrifile();
  }
  profs: any;

  sw1() {
    document.body.classList.toggle("--light");
    document.body.classList.toggle("--dark");
  }
    

  getPrifile(){
    this.authService.getprofile().subscribe(res=>{
      console.log(res);
      //alert(res);
      this.profs=res;
    })
  }

  logout() {
    this.authService.logout();
    this.authService.loginSubject.next(null);
    this.router.navigate(['']);
  }

  isUserInRole(role) {
    if (role === 'admin') {
      return this.authService.isUserAdmin();
    }
    return false;
  }
}

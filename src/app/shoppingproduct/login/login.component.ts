import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  usernamelogin: string;
  passwordlogin: string;

  username: string;
  password: string;
  email: string;
  password2: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(f) {
    this.authService.login(this.usernamelogin, this.passwordlogin)
      .pipe(
        switchMap((success) => this.authService.storeToken(success))
      ).subscribe(() => {
        this.authService.loginSubject.next(null);
        this.router.navigate(['']);
        //this.flashMessage.show('You were successfully logged in!', { cssClass: 'card-panel green lighten-4', timeout: 3000 });
      }, error => {
       // this.flashMessage.show('Wrong email/password', { cssClass: 'card-panel red lighten-3', timeout: 3000 });
      });
  }

  register(f) {
    this.authService.register(this.username,this.email, this.password).subscribe(success => {
      this.router.navigate(['/login']);
      // tslint:disable-next-line:max-line-length
      //this.flashMessage.show('You are successfully registered! You can now login.', { cssClass: 'card-panel green lighten-4', timeout: 3000 });
    }, error => {
     // this.flashMessage.show('Something went wrong', { cssClass: 'card-panel red lighten-3', timeout: 3000 });
    });
  }

}

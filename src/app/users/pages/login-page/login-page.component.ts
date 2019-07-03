import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user = { 
    email: null,
    password: null
  }

  loginSuccessfull = false;
  loginError = null;
  loginOngoing = false;

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onSubmit(){
    console.log('onSubmit', this.user)
    this.loginOngoing=true;
    try {
      const authResponse = await this.userService.login(this.user.email, this.user.password);
      if(authResponse.status){
        this.userService.auth(authResponse);
        this.router.navigate(['users', 'profile']);
      }
      else
      {
        this.loginError="Wpisz poprawne dane do logowania"  ;
      }
    } catch (e) {
      console.log('error', e)
      this.loginError="Cos poszlo nie tak :(";
    }finally{
      this.loginOngoing=false;
    }
  }
}

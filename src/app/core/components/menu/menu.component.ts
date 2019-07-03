import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/services/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  userLoggedIn = false;

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.userService.$user.subscribe({
      next: (response) => {
        console.log('user status: ', response);
        if(response && response.status){
          this.userLoggedIn = true;
        }
        else{
          this.userLoggedIn = false;
        }
      },
      error: (error)=>{
        console.log('error: ', error);
        this.userLoggedIn = false;
      },
      complete: () => {
        console.log('completed');
        this.userLoggedIn = false;
      }
    })
  }

  logout(){
    this.userService.logout();
  }

}

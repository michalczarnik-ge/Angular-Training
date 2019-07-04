import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {

  user: IUser = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService
  ) { }

  async ngOnInit() {
    const userID = this.route.snapshot.params.userID;
    console.log("UserID", userID)
    try{
      this.user = await this.userService.GetUserById(userID);
    }catch(e){
      console.warn(e);
      this.router.navigateByUrl("/404");
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private router: ActivatedRoute,
    private userService: UsersService
  ) { }

  async ngOnInit() {
    const userID = this.router.snapshot.params.userID;
    console.log("UserID", userID)
    this.user = await this.userService.GetUserById(userID);
  }

}

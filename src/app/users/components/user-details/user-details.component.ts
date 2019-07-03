import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: IUser = null;

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }

}

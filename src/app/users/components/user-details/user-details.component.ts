import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: IUser = null;
  isAuthUserProfile: boolean = false;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    const userID = this.route.snapshot.params.userID;
    var authUser = this.userService.getCurrentUser();
    if(!userID && !authUser)
      this.router.navigateByUrl('/404');
    if(userID)
      this.isAuthUserProfile = (authUser && (userID===authUser.id));
    else
      this.isAuthUserProfile = true;
  }

}

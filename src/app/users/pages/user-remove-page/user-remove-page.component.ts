import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-remove-page',
  templateUrl: './user-remove-page.component.html',
  styleUrls: ['./user-remove-page.component.scss']
})
export class UserRemovePageComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  onDismiss() {
    console.log("onDismiss");
    this.router.navigateByUrl('/users/profile')
  }

  async onAccept() {
    console.log("onAccept");
    try {
      const user = await this.userService.destroyCurrentUser()
      this.router.navigateByUrl('/');
    } catch (e) {
      console.warn(e);
    }
  }
}

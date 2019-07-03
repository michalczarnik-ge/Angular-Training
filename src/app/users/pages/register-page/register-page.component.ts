import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  name = new FormControl();
  email = new FormControl();
  password = new FormControl();
  confirmPassword = new FormControl();
  avatarUrl = new FormControl();

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password,
    confirmPassword: this.confirmPassword,
    avatarUrl: this.avatarUrl
  });

  registrationSuccessful = false;
  registrationOngoing = false;
  registrationError = null;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    const form = this.registerForm.getRawValue();
    this.registrationOngoing = true;
    console.log(form);

    try {
      await this.usersService.register(form);
      this.registrationSuccessful = true;
    } catch (e) {
      console.log(e);
      this.registrationError = e;
    } finally {
      this.registrationOngoing = false;
    }
  }

}

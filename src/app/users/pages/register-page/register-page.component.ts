import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import uuid from 'uuid';

import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
  avatarUrl = new FormControl('', [Validators.required]);

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
      const user = RegisterPageComponent.parseUserForm(form);
      await this.usersService.register(user);
      this.registrationSuccessful = true;
    } catch (e) {
      console.log(e);
      this.registrationError = "Coś poszło nie tak";
    } finally {
      this.registrationOngoing = false;
    }
  }

  static parseUserForm(form: any): IUser {
    return {
      name: form.name,
      email: form.email,
      password: form.password,
      avatar_url: form.avatarUrl,
      id: uuid()
    };
  }

}

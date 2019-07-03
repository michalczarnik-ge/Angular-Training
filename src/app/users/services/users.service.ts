import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { IUserList } from '../interfaces/user-list.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  $user = new BehaviorSubject(null);

  constructor(
    private http: HttpClient
  ) { }

  register(user: IUser) {
    this.http.post(environment.usersUrl, user).toPromise();
  }

  async login(email, password) {
    const users = await this.http.get<IUserList>(environment.usersUrl).toPromise();
    const authUser = users.find((u) => {
      return u.email === email && u.password === password;
    })
    return{
      status: Boolean(authUser),
      ...authUser
    }
  }

  auth(authResponse: { id: string; name: string; avatar_url: string; email?: string; password?: string; status: boolean; }) {
    this.$user.next(authResponse);
  }

  logout(){
    this.$user.next(null);
  }
}

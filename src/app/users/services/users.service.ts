import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { IUserList } from '../interfaces/user-list.interface';
import { BehaviorSubject, throwError } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  $user = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { 
    this.restore();
  }

  register(user: IUser) {
    this.http.post(environment.usersUrl, user).toPromise();
  }

  async login(email, password) {
    const users = await this.http.get<IUserList>(environment.usersUrl).toPromise();
    const authUser = users.find((u) => {
      return u.email === email && u.password === password;
    });
    return{
      status: Boolean(authUser),
      ...authUser
    }
  }

  auth(authResponse: { id: string; name: string; avatar_url: string; email?: string; password?: string; status: boolean; }) {
    this.storage.create('user', authResponse);
    this.$user.next(authResponse);
  }

  logout(){
    this.storage.delete('user');
    this.$user.next(null);
  }

  restore(){
    const user = this.storage.read('user');
    if(!user){
      return;
    }
    this.$user.next(user);
  }

  getCurrentUser(){
    return this.$user.getValue();
  }

  async GetUserById(userID: string) {
    const url = `${environment.usersUrl}/${userID}`;
    return this.http.get<IUser>(url).toPromise();
  }

  async destroyCurrentUser() {
    const currentUser = this.getCurrentUser();
    const url = `${environment.usersUrl}/${currentUser.id}`;
    return this.http.delete(url).pipe(catchError(value=>{
      return throwError(value);
    }),tap(value=>{
      this.logout();
    })
    ).toPromise();
  }
}

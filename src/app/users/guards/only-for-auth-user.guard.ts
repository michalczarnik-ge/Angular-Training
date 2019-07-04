import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OnlyForAuthUserGuard implements CanActivate {

  constructor(
    private userService: UsersService,
    private router: Router
  ) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //1. Sprawdz czy uzytkownik jest zalogowany? 
    return this.userService.$user.pipe(
      map(value=>{
        return (value!=null) && value.status;
      }),
      tap(isUserLoggedIn => {
        if(!isUserLoggedIn){
          this.router.navigate(['/404']);
        }
      }));
  }
}

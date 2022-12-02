import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICreateUser, ILogInUser } from './shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUser = new BehaviorSubject<ICreateUser | undefined>(undefined);
  currentUser = this._currentUser.asObservable();
  isLoggedIn = this.currentUser.pipe(map(user => !!user));

  /*
  Here we creating Behavior Subject which is like an Observable object to keep data for us.

  This type of Subject should have initial value so we set it to undefined. When someone subscribes for it. The subject emit immediately the current value in it.

  isLoggedIn take the value from this Subject with pipe and map it to boolean value and after that give this boolean vlaue to the template so we know
  if we have user or not.
  */
  constructor(
    private http: HttpClient
  ) { }

  register(userData: { username: string, email: string, tel: string, password: string }): Observable<ICreateUser> {
    return this.http.post<ICreateUser>(`${environment.apiUrl}/register`, userData, { withCredentials: true });
  }

  login(userData: { email: string, password: string }): Observable<ILogInUser | null> {
    return this.http.post<ILogInUser | null>(`${environment.apiUrl}/login`, userData, { withCredentials: true });
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/logout`, {}, { withCredentials: true });
  }

  authenticate(): Observable<ICreateUser> {
    return this.http.get<ICreateUser>(`${environment.apiUrl}/users/profile`, { withCredentials: true })
      .pipe(tap(currentProfile => this.handleLogin(currentProfile)), catchError((err) => {
        return  EMPTY; // this is syntax for empty Obesarvable.
      }))
  }

  handleLogin(newUser: ICreateUser) {
    this._currentUser.next(newUser);
  }

  handleLogout() {
    this._currentUser.next(undefined);
  }


}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { ILogInUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  currentUser: Observable<ILogInUser | undefined> = this.authService.currentUser;
  isLoggedIn: Observable<boolean> = this.authService.isLoggedIn;

  isLoggingOut: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  handleLogout(): void {

    if (this.isLoggingOut) {
      return;
    }
    this.isLoggingOut = true; // we set this to true to prevent the client for clicking on logout multiple times.

    this.authService.logout().subscribe({
      complete: () => {
        this.isLoggingOut = false;
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.isLoggingOut = false;
        console.log(err);
      }
    })
  }
}

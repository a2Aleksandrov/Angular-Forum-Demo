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

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  handleLogout(): void {
    this.authService.logout().subscribe({
      next: () => {

        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}

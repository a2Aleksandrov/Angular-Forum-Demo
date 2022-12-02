import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  isLoggedIn!: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(hasUser => this.isLoggedIn = hasUser);
  }
}



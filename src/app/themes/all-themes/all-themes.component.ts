import { Component, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ITheme } from 'src/app/shared/interfaces';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-all-themes',
  templateUrl: './all-themes.component.html',
  styleUrls: ['./all-themes.component.scss']
})
export class AllThemesComponent implements OnInit {

  userId!: string | undefined;
  isLoggedIn!: boolean;
  themes!: ITheme[];
  canSubscribe!: Boolean;
  theme!: ITheme;

  constructor(
    private renderer: Renderer2,
    private authService: AuthService,
    private themesService: ThemesService) { }

  ngOnInit(): void {
    this.themesService.getAllThemes().subscribe({
      next: (themes) => {
        this.themes = themes;
      },
      error: (err) => {
        console.log(err);
      }
    });
    this.authService.isLoggedIn.subscribe(hasUser => this.isLoggedIn = hasUser);
    this.authService.currentUser.subscribe(user => this.userId = user?._id);
  }

  onSubscribe(event: Event) {
    const themeId = this.renderer.parentNode(event.target).parentNode.parentNode.firstChild.href.slice(-24);
    const currentThemeObservable = this.themesService.getThemeById(themeId);
    currentThemeObservable.subscribe(theme => this.theme = theme);
    this.theme.subscribers.push(this.userId as string);
  }

}

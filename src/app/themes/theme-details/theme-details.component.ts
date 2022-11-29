import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITheme } from 'src/app/shared/interfaces';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.scss']
})
export class ThemeDetailsComponent implements OnInit {

  theme!: ITheme

  constructor(
    private activatedRoute: ActivatedRoute,
    private themesService: ThemesService) { }

  ngOnInit(): void {
    const themeId = this.activatedRoute.snapshot.params['themeId'];
    console.log(themeId);
    this.themesService.getThemeById(themeId).subscribe({
      next: (theme) => {
        this.theme = theme;
        console.log(theme);
      }
    });
  }

}

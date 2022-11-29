import { Component, OnInit } from '@angular/core';
import { ITheme } from 'src/app/shared/interfaces';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-all-themes',
  templateUrl: './all-themes.component.html',
  styleUrls: ['./all-themes.component.scss']
})
export class AllThemesComponent implements OnInit {

  themes!: ITheme[];

  constructor(private themesService: ThemesService) { }

  ngOnInit(): void {
    this.themesService.getAllThemes().subscribe({
      next: (themes) => {
        this.themes = themes;
      }
    });
  }

}

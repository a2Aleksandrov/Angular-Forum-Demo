import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { AllThemesComponent } from './all-themes/all-themes.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { PostsComponent } from './posts/posts.component';
import { themesRoutingModule } from './themes-routing.module';



@NgModule({
  declarations: [
    NewThemeComponent,
    AllThemesComponent,
    ThemeDetailsComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    themesRoutingModule,
  ]
})
export class ThemesModule { }

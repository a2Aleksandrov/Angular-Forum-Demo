import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { AllThemesComponent } from './all-themes/all-themes.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { PostsComponent } from './posts/posts.component';
import { themesRoutingModule } from './themes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



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
    SharedModule,
    FormsModule
  ]
})
export class ThemesModule { }

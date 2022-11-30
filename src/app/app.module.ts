import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (authService: AuthService) => {
        return () => authService.authenticate(); // this function is called at app start and it makes request for user's profile.
      },                                         // If we still have active jwt token in our browser it is validated with the request and the back end gives us back the user.  
      deps: [AuthService],                       // This helps us to stay authenticated even if we refresh the app or close it and open it later 
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

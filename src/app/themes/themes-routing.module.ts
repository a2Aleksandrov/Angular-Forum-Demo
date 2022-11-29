import { RouterModule, Routes } from "@angular/router"
import { AllThemesComponent } from "./all-themes/all-themes.component";
import { NewThemeComponent } from "./new-theme/new-theme.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: AllThemesComponent
    },
    {
        path: 'new',
        component: NewThemeComponent
    }
]


export const themesRoutingModule = RouterModule.forChild(routes);
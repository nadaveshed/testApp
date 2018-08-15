import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./auth/login.component";
import { RegisterComponent } from "./auth/register.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);


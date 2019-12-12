import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const routes: Routes = [
    {
        path: '', component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent},
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]
     },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports: [RouterModule]
})
export class RoutingMainModule {}

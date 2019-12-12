import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routes
import { RoutingMainModule } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { SiderbarComponent } from './shared/siderbar/siderbar.component';
import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,
    SiderbarComponent,
    RegisterComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    RoutingMainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

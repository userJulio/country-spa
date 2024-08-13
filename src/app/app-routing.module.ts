import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './shared/pages/homepage/homepage.component';
import { AbaoutPagesComponent } from './shared/pages/abaout-pages/abaout-pages.component';
import { ContactPagesComponent } from './shared/pages/contact-pages/contact-pages.component';

const routes: Routes = [
  { 
    path:"home",
    component:HomepageComponent
  },
  {
    path:"about",
    component:AbaoutPagesComponent
  },
  {
    path:"contact",
    component:ContactPagesComponent
  },
  {
    path:"countries",
    loadChildren: ()=> import("./countries/countries.module").then(m=>m.CountriesModule)
  },
  {
    path:"**",
    redirectTo:"countries"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AbaoutPagesComponent } from './pages/abaout-pages/abaout-pages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    HomepageComponent,
    AbaoutPagesComponent,
    SidebarComponent,
    ContactPagesComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    HomepageComponent,
    AbaoutPagesComponent,
    SidebarComponent,
    ContactPagesComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
  ]
})
export class SharedModule { }

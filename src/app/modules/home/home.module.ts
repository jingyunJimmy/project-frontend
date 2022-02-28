import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeService } from './services/home.service';
import { CommonHttpService } from '@services/common-http.service';
import { ContactTableComponent } from './components/contact-table/contact-table.component';

@NgModule({
  declarations: [HomeComponent, ContactTableComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  providers: [
    HomeService, 
    CommonHttpService
  ]
})
export class HomeModule { }

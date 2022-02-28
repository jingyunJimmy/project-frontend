import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../../services/home.service';
import { PageData, Employee, Contact, Invoice } from '@interfaces/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  tenantId: string;
  companyName: string = 'Company Name Unavailable';
  pageData: PageData;
  averageSalary: number = 0;
  employees: Employee[] = [];
  customers: Contact[] = [];
  suppliers: Contact[] = [];
  error: string;

  private subs = new Subscription();

  constructor(
    private router: Router,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.tenantId = this.homeService.getTenantId();
    this.getCompanyName();
    this.getPageData();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getCompanyName() {
    this.subs.add(
      this.homeService.getTenantName().subscribe(response => {
        if (response) {
          this.companyName = response;
        }
      })
    );
  }

  getPageData() {
    this.subs.add(
      this.homeService.getHomeData({ tenantId: this.tenantId }).subscribe(response => {
        if (response) {
          this.error = response?.error;
          this.pageData = response as PageData;
          this.averageSalary = this.pageData?.averageSalary;
          this.employees = this.pageData?.employees;
          this.customers = this.pageData?.customers;
          this.suppliers = this.pageData?.suppliers;
        }
      })
    )
  }

  logout() {
    this.homeService.logout();
    this.router.navigate(['/']);
  }

}

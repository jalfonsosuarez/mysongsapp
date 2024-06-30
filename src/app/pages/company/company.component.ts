import { Component, OnInit } from '@angular/core';
import { Company } from '../../interfaces/company';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
})
export class CompanyComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) {}

  async ngOnInit() {
    this.companies = await this.companyService.getAllCompanies();
  }
}

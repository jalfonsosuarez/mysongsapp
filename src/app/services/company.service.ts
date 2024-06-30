import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor() {}

  async getAllCompanies(): Promise<Company[]> {
    const companies: Company[] = await fetch(
      'http://localhost:3000/companies'
    ).then((resp) => resp.json());
    return companies;
  }
}

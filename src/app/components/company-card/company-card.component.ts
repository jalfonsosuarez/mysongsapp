import { Component, Input } from '@angular/core';
import { Company } from '../../interfaces/company';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styles: ``,
})
export class CompanyCardComponent {
  @Input() item: Company | undefined;
}

import { Component, computed, inject } from '@angular/core';
import { AnnualData } from '../model/user-input-model.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private _investmentService = inject(InvestmentService);

  results = this._investmentService.resultsData.asReadonly();

}

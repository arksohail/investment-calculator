import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import type { AnnualData } from './model/user-input-model.model';
import { JsonPipe } from '@angular/common';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, JsonPipe, InvestmentResultsComponent],
})
export class AppComponent {

  resultsData = signal<AnnualData[] | undefined>(undefined);

}

import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import type { AnnualData, UserInput, UserInputModel } from './model/user-input-model.model';
import { JsonPipe } from '@angular/common';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, JsonPipe, InvestmentResultsComponent],
})
export class AppComponent {

  private _investmentData!: AnnualData[];
  public get investmentData(): AnnualData[] {
    return this._investmentData;
  }
  public set investmentData(value: AnnualData[]) {
    this._investmentData = value;
  }

  onCalculateInvestmentResults(data: UserInputModel) {
    const {initialInvestment, duration, expectedReturn, annualInvestment} = data
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    console.log(annualData);
    this._investmentData = annualData;
  }
}

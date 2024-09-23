export interface UserInput {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
}

export interface AnnualData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}

export class UserInputModel {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;

  constructor(data: UserInput) {
    this.initialInvestment = data.initialInvestment;
    this.annualInvestment = data.annualInvestment;
    this.expectedReturn = data.expectedReturn;
    this.duration = data.duration;
  }
}

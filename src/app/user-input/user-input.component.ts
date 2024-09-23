import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputModel } from '../model/user-input-model.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // calculate = output<UserInputModel>()
  calculate = output<UserInputModel>()

  initialInvestment = signal<string | number>("0");
  annualInvestment = signal<string | number>("0");
  expectedReturn = signal<string | number>("5");
  duration = signal<string | number>("10");

  constructor(private _investmentService: InvestmentService) {}
 
  onSubmit() {
    this._investmentService.calculateInvestmentResults(new UserInputModel({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    }));
    this.resetForm();
  }

  resetForm() {
    this.initialInvestment.set("0");
    this.annualInvestment.set("0");
    this.expectedReturn.set("5");
    this.duration.set("10");
  }

}

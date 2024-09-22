import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment?: string = "0";
  annualInvestment?: string = "0";
  expectedReturn?: string = "5";
  duration?: string = "10";
  onSubmit() {
    console.log("SUBMITTED");
    console.log("FORM VALUES", this.annualInvestment, this.duration, this.expectedReturn, this.initialInvestment);
  }

}

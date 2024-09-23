import { Component, signal } from '@angular/core';
import type { AnnualData } from './model/user-input-model.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html'
})
export class AppComponent {

  resultsData = signal<AnnualData[] | undefined>(undefined);

}

import { Component } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Journey } from 'src/app/models/journey.model';
import { JourneyService } from 'src/app/services/journey.service';

@Component({
  selector: 'app-journey-search',
  templateUrl: './journey-search.component.html',
  styleUrls: ['./journey-search.component.scss']
})
export class JourneySearchComponent {
  origin: string = '';
  destination: string = '';
  maxFlights: number = 0;
  journeysResults: Array<Journey> = [];
  showError: boolean = false;
  errorMessage: string = '';

  constructor(private journeyService: JourneyService) {}

  isSearchDisabled(): boolean {
    return !this.origin || !this.destination;
  }

  closeErrorMessage(): void {
    this.showError = false;
  }

  searchJourneys(): void {
    this.journeyService.getJourneys(this.origin, this.destination, this.maxFlights)
    .pipe(
      catchError(error => {
        console.error('Error fetching journeys:', error);
        this.journeysResults = [];
        this.errorMessage = this.Message(error);
        return throwError(() => new Error(this.errorMessage));
      })
    )
    .subscribe((journeys) => {
      this.journeysResults = journeys;
    });
  }

  private Message(error: any): string {
    this.showError = true;
    if (error.status === 404 || error.status === 500) {
      return error.error;
    } else {
      return 'Ha ocurrido un error al buscar vuelos.';
    }
  }
}

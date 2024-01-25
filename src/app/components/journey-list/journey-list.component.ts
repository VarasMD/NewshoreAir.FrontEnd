import { Component, Input } from '@angular/core';
import { Journey } from 'src/app/models/journey.model';

@Component({
  selector: 'app-journey-list',
  templateUrl: './journey-list.component.html',
  styleUrls: ['./journey-list.component.scss']
})
export class JourneyListComponent {
  @Input() journeys!: Array<Journey>;
}

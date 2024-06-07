import { Component } from '@angular/core';
import { EventService } from '@app/event.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByTypePipe } from '@app/filter-by-type.pipe';

@Component({
  selector: 'app-events',
  standalone: true,
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  imports: [CommonModule, FilterByTypePipe],
})
export class EventsComponent implements OnInit {
  constructor(private Events: EventService) {}

  events: any[] = [];
  typesToExclude: string[] = [];
  availableTypes: string[] = ['debug', 'vylet', 'tabor', 'trojd', 'info'];
  dropdownOpen: boolean = false;

  ngOnInit(): void {
    this.Events.getEvents().subscribe((events) => {
      console.log(events);
      this.events = events;
    });
  }
}

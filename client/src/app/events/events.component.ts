import { Component } from '@angular/core';
import { EventService } from '@app/event.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent implements OnInit {
  constructor(private Events: EventService) {}

  events: any;

  ngOnInit(): void {
    this.Events.getEvents().subscribe((events) => {
      console.log(events);
      this.events = events;
    });
  }
}

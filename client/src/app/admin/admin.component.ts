import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Event } from '@app/event.service';
import { OnInit } from '@angular/core';
import { EventService } from '@app/event.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  newEvent: Event = {
    _id: '',
    title: '',
    content: '',
    createdAt: '',
    type: '',
  };
  constructor(private events: EventService) {}

  ngOnInit(): void {}

  addEvent() {
    if (!this.newEvent.title || !this.newEvent.content || !this.newEvent.type) {
      alert('Názov, udalosť a typ sú povinné polia');
    } else {
      this.events.addEvent(this.newEvent);
      alert('Udalosť vytvorená');
    }
  }
}

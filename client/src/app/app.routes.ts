import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  { path: 'home', title: '4. zbor - Domov', component: HomeComponent },
  { path: 'events', title: '4. zbor - Udalosti', component: EventsComponent },
  { path: 'admin', title: 'Admin', component: AdminComponent },
  { path: 'contact', title: '4. zbor - Kontakt', component: ContactComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: '**', title: '404 Not found', component: NotfoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

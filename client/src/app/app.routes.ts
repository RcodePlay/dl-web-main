import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', title: '4. Zbor - Domov', component: HomeComponent },
  { path: 'events', title: '4. Zbor - Udalosti', component: EventsComponent },
  { path: 'admin', title: '4. Zbor - Admin', component: AdminComponent },
  { path: 'contact', title: '4. Zbor - Kontakt', component: ContactComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: '**', title: '404 Nič sa nenašlo', component: NotfoundComponent },
];

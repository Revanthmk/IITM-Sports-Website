import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// ----------- 3rd Party Modules ------------------ //

// ----------- Custom Components ------------------ //

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarDateComponent } from './components/calendar-date/calendar-date.component';

// ----------- Custom Pages ---------------------- //

import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';

// ----------- App Routes ------------------------ //

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'calendar', component: CalendarPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CalendarDateComponent,
    CalendarPageComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DigitalClockComponent } from '../home/digital-clock/digital-clock.component';
// import { SomePageComponent } from '../some-page/trush-page/some-page.component'
import { ContactComponent } from '../navigation/contact/contact.component';
import { NoPageFoundComponent } from '../some-page/no-page-found/no-page-found.component';
import { HeaderComponent } from '../navigation/header/header.component';
import { StudentDetailsComponent } from '../data/student-details/student-details.component';
import { DosenDetailsComponent } from '../data/dosen-details/dosen-details.component';
// import { ProfileComponent } from '../home/profile/profile.component';
// import { SidenavListComponent } from '../navigation/sidenav-list/sidenav-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DigitalClockComponent },
  // { path: 'about', pathMatch: 'prefix', component: SomePageComponent },
  { path: 'data/student', component: StudentDetailsComponent },
  { path: 'data/dosen', component: DosenDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }

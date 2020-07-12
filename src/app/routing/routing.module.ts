import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DigitalClockComponent } from '../home/digital-clock/digital-clock.component';
import { NoPageFoundComponent } from '../some-page/no-page-found/no-page-found.component';
import { HeaderComponent } from '../home/header/header.component';
import { StudentDetailsComponent } from '../data/student-details/student-details.component';
import { DosenDetailsComponent } from '../data/dosen-details/dosen-details.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DigitalClockComponent },
  { path: 'data/student', component: StudentDetailsComponent },
  { path: 'data/dosen', component: DosenDetailsComponent },
    { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
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

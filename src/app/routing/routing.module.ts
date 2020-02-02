import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../navigation/header/header.component';
import { SomePageComponent } from '../some-page/some-page.component'
import { SidenavListComponent } from '../navigation/sidenav-list/sidenav-list.component';
import { ContactComponent } from '../navigation/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HeaderComponent},
  { path: 'profile', component: SomePageComponent },
  { path: '', component: SidenavListComponent },
  { path: 'contact', component: ContactComponent },
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

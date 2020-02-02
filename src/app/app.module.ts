import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { SomePageComponent } from './some-page/some-page.component';
// import { NotFoundComponent } from './some-page/not-found.component';
// import { ExternalUrlDirective } from './some-page/external-url.directive';
// import { NgStickyDirective } from 'ng-sticky';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
import {MatTabsModule, MatSidenavModule, 
  MatToolbarModule, MatIconModule, MatButtonModule, 
  MatListModule, MatMenuModule} from '@angular/material';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './navigation/contact/contact.component';


@NgModule({
  declarations: [
    SidenavListComponent,AppComponent,HeaderComponent,HomeComponent,SomePageComponent, ContactComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,FormsModule, BrowserAnimationsModule,RoutingModule,
    MatTabsModule, MatSidenavModule, MatIconModule, MatButtonModule, MatListModule,
    MatToolbarModule,MatMenuModule, CommonModule,RouterModule.forRoot([]),
  ],
  exports: [
    MatTabsModule, MatSidenavModule, MatToolbarModule, 
    MatIconModule, MatButtonModule,MatListModule,MatMenuModule
  ],
  providers: [],
  bootstrap: [ AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA  // added this
  ]
})

export class AppModule { }

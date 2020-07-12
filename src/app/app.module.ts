import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SomePageComponent } from './some-page/trush-page/some-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
import {MatTabsModule, MatSidenavModule, 
  MatToolbarModule, MatIconModule, MatButtonModule, 
  MatListModule, MatMenuModule} from '@angular/material';
import { CommonModule } from '@angular/common';
import { DigitalClockComponent } from './home/digital-clock/digital-clock.component';
import { UtilService } from './home/shared/services/util.service';
import { DataComponent } from './data/data.component';
import { NoPageFoundComponent } from './some-page/no-page-found/no-page-found.component';
import { StudentDetailsComponent } from './data/student-details/student-details.component';
import { DosenDetailsComponent } from './data/dosen-details/dosen-details.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,
    SomePageComponent, DigitalClockComponent,
    DataComponent, NoPageFoundComponent, StudentDetailsComponent, DosenDetailsComponent, FooterComponent, ContactComponent, AboutComponent
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
  providers: [UtilService],
  bootstrap: [ AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA  // added this
  ]
})

export class AppModule { }

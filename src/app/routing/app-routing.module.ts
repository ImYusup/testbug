import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../some-page/not-found.component';
import { SomePageComponent } from '../some-page/some-page.component';
import { ExternalUrlDirective } from '../some-page/external-url.directive';


const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
const deactivateGuard = new InjectionToken('deactivateGuard');

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: SomePageComponent,
    canDeactivate: [deactivateGuard],
  },
  {
    path: 'externalRedirect',
    canActivate: [externalUrlProvider],
    // We need a component here because we cannot define the route otherwise
    component: NotFoundComponent,
  },
  { path: 'external', component: ExternalUrlDirective },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
    providers: [
       {
         provide: externalUrlProvider,
         useValue: (route: ActivatedRouteSnapshot) => {
         const externalUrl = route.paramMap.get('externalUrl');
         window.open(externalUrl, '_self');
         },
       },
       {
        provide: deactivateGuard,
        useValue: () => {
          console.log('Guard function is called!')
          return false;
        }
      },
  ],
  declarations: []
})
export class AppRoutingModule { }
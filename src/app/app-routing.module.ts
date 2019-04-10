import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// page components

// utility components
import { SignInComponent } from './sign-in/sign-in.component';
import { AddBoothComponent } from './add-booth/add-booth.component';
// main-content components
import { HomeComponent } from './home/home.component';
import { LocalMarketComponent } from './local-market/local-market.component';
import { MapComponent } from './map/map.component';
import { MyBoothsComponent } from './my-booths/my-booths.component';
// global-footer components
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
// 404 component
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // utility components
  { path: 'sign-in', component: SignInComponent},
  { path: 'add-booth', component: AddBoothComponent},
  // main-content components
  { path: 'home', component: HomeComponent},
  { path: 'local-market', component: LocalMarketComponent },
  { path: 'map', component: MapComponent },
  { path: 'my-booths', component: MyBoothsComponent },
  // global-footer components
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
  // 404 component
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

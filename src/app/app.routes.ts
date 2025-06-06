import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'legalNotice', component: LegalNoticeComponent },
  { path: 'privacyPolicy', component: PrivacyPolicyComponent },
];

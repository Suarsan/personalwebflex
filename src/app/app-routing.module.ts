import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoNgxDuallistboxComponent } from './demo-ngx-duallistbox/demo-ngx-duallistbox.component';
import { DemoNgxKeyvalueComponent } from './demo-ngx-keyvalue/demo-ngx-keyvalue.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'ngx-duallistbox', component: DemoNgxDuallistboxComponent },
  { path: 'ngx-keyvalue', component: DemoNgxKeyvalueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {  scrollPositionRestoration: 'enabled',
                                            anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

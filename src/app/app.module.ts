import { BrowserModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';
import { translateBrowserLoaderFactory } from './loaders/translate-browser.loader';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgxDuallistboxModule } from '@suarsan/ngx-duallistbox';
import { DemoNgxDuallistboxComponent } from './demo-ngx-duallistbox/demo-ngx-duallistbox.component';
import { NgxKeyvalueModule } from '@suarsan/ngx-keyvalue';
import { DemoNgxKeyvalueComponent } from './demo-ngx-keyvalue/demo-ngx-keyvalue.component';
import { NgxFlipboardtextModule } from '@suarsan/ngx-flipboardtext';
import { DemoNgxFlipboardtextComponent } from './demo-ngx-flipboardtext/demo-ngx-flipboardtext.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DemoNgxDuallistboxComponent,
    DemoNgxKeyvalueComponent,
    DemoNgxFlipboardtextComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    SkillsComponent,
    SkillBarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxDuallistboxModule,
    NgxKeyvalueModule,
    NgxFlipboardtextModule,
    TransferHttpCacheModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: translateBrowserLoaderFactory,
          deps: [HttpClient, TransferState]
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

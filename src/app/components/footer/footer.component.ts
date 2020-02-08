import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

  public spanish() {
    this.translateService.use('es');
  }
  public english() {
    this.translateService.use('en');
  }
  public languageInUse(lang) {
    if (this.translateService.currentLang === lang) {
      return true;
    }
    return false;
  }
}

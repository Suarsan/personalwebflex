import { join } from 'path';
import { Observable } from 'rxjs';
import { TranslateLoader } from '@ngx-translate/core';
import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';
import * as fs from 'fs';

export class TranslateServerLoader implements TranslateLoader {
  
  constructor(private transferState: TransferState) { }

  public getTranslation(lang: string): Observable<any> {
    return new Observable((observer) => {

      const assets_folder = join(process.cwd(), 'browser', 'assets', 'i18n');

      const jsonData = JSON.parse(fs.readFileSync(`${assets_folder}/${lang}.json`, 'utf8'));

      const key: StateKey<number> = makeStateKey<number>('transfer-translate-' + lang);

      this.transferState.set(key, jsonData);

      observer.next(jsonData);
      observer.complete();

    });
  }

}

export function translateServerLoaderFactory(transferState: TransferState) {
  return new TranslateServerLoader(transferState);
}
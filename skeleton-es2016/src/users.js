import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';
import {BaseI18N} from 'aurelia-i18n';
import {I18N} from 'aurelia-i18n';

@inject(HttpClient, I18N)
export class Users extends BaseI18N {
  heading = this.i18n.tr('users.github_users');
  users = [];

  constructor(http, i18n) {
      super(i18n);
        this.i18n = i18n;
        this.i18n
            .setLocale('en')
            .then( () => {
            // locale is loaded
        });
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => this.users = users);
  }
}

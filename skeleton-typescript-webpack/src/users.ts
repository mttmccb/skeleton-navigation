import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'isomorphic-fetch';
import {I18N} from 'aurelia-i18n';

interface IUser {
  avatar_url: string;
  login: string;
  html_url: string;
}

@inject(HttpClient, I18N)
export class Users {
  heading: string = 'Github Users';
  users: Array<IUser> = [];
  i18n: I18N;
  
  constructor(public http: HttpClient, i18n: I18N) {
    this.i18n = i18n;
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });
  }

  activate(): Promise<IUser[]> {
    return this.http.fetch('users')
      .then<IUser[]>(response => response.json())
      .then<IUser[]>(users => this.users = users);
  }
}

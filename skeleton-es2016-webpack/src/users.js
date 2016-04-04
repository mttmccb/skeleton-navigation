import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'isomorphic-fetch';
import {I18N} from 'aurelia-i18n';

@inject(HttpClient, I18N)
export class Users {
    heading = 'Github Users';
    users = [];

    constructor(http, i18n) {
        this.i18n = i18n;
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

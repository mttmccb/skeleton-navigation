import {I18N} from 'aurelia-i18n';
import {inject} from 'aurelia-framework';

@inject(I18N)
export class App {
    constructor(i18n) {
       this.i18n = i18n;
    }
    
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: this.i18n.tr('nav_bar.welcome') },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: this.i18n.tr('nav_bar.github_users')},
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: this.i18n.tr('nav_bar.child_router') }
    ]);

    this.router = router;
  }
}

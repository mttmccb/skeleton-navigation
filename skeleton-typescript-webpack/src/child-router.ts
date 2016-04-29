
import {Router, RouterConfiguration} from 'aurelia-router';
import {I18N} from 'aurelia-i18n';
import {inject} from 'aurelia-framework';

@inject(I18N)
export class ChildRouter {
  i18n: I18N;
  router: Router;
    constructor(i18n) {
       this.i18n = i18n;
    }

  heading = 'Child Router';

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome', settings: { t:'welcome' } },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users', settings: { t:'github_users' }},
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router', settings: { t:'child_router' }}
    ]);

    this.router = router;
  }
}

import {Aurelia} from 'aurelia-framework';
import {bootstrap} from 'aurelia-bootstrapper-webpack';
import {I18N} from 'aurelia-i18n';
import * as XHR from 'i18next-xhr-backend';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../styles/styles.css';

bootstrap((aurelia: Aurelia): void => {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-i18n', (instance) => {
      // register backend plugin
      instance.i18next.use(XHR);

      // adapt options to your needs (see http://i18next.com/docs/options/)
      instance.setup({
        backend: {                                  // <-- configure backend settings
          loadPath: '/locales/{{lng}}/{{ns}}.json', // <-- XHR settings for where to get the files from
        },
        lng: 'en',
        attributes: ['t', 'i18n'],
        fallbackLng: 'cy',
        debug: false
      });
    });

  aurelia.start().then(() => aurelia.setRoot('app', document.body));
});

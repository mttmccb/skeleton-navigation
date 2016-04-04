var Promise = require('bluebird'); // Promise polyfill for IE11
import {bootstrap} from 'aurelia-bootstrapper-webpack';
import {I18N} from 'aurelia-i18n';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../styles/styles.css';
import XHR from 'i18next-xhr-backend';

bootstrap(function (aurelia) {
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
          lng : 'en',
          ns: ['anotherNS', 'translation'],
            fallbackNS: ['anotherNS', 'translation'],
            defaultNS: 'anotherNS',
          attributes : ['t','i18n'],
          fallbackLng : 'cy',
          debug : false
        });
      });

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot('app', document.body));
});

'use strict';

/* @ngInject */
function TranslationsConfig($translateProvider) {
    var browserLanguage = navigator.language.split('-')[0];
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.translations('es', require('./lang-es.json'));
    $translateProvider.translations('en', require('./lang-en.json'));
    $translateProvider.preferredLanguage(browserLanguage);
}

module.exports = TranslationsConfig;

Package.describe({
  summary: 'Location enabled products for reaction.',
  name: 'getoutfitted:reaction-location-enabled-products',
  version: '0.1.0',
  git: 'https://github.com/getoutfitted/reaction-location-enabled-products'
});

Npm.depends({
  'faker': '3.0.1',
  'mapbox': '0.8.2', // geocoder
  'turf-inside': '1.1.4' // determine if point is inside poly
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2');
  api.use('meteor-platform');
  api.use('less');
  api.use('http');
  api.use('underscore');
  api.use('reactioncommerce:core@0.9.2');
  api.use('reactioncommerce:reaction-accounts@1.2.0');
  api.use('iron:router@1.0.12');
  api.use('jeremy:geocomplete@1.6.5'); // geocomplete

  // Register reaction package
  api.addFiles([
    'server/registry.js'
  ], 'server');

  // Add libs
  api.addFiles('lib/faker.js', ['server']);
  api.addFiles('lib/mapbox.js', ['server']);
  api.addFiles('lib/turf.js', ['server']);

  api.addFiles([
    'client/templates/dashboard.html',
    'client/templates/dashboard.js'
  ], 'client');

  api.addFiles([
    'common/router.js',
    'common/collections.js'
    // 'common/factories/orders.js',
    // 'common/factories/ordersWithAF.js'
  ], ['client', 'server']);
});


Package.onTest(function (api) {
  api.use('sanjo:jasmine@0.19.0');
  api.use('underscore');
  api.use('dburles:factory@0.3.10');
  api.use('velocity:html-reporter@0.9.0');
  api.use('velocity:console-reporter@0.1.3');


  api.use('reactioncommerce:core@0.9.2');
  api.use('reactioncommerce:bootstrap-theme');
  api.use('getoutfitted:reaction-location-enabled-products');
});

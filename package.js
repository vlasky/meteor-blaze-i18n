Package.describe({
  name:     'vlasky:blaze-i18n',
  version:  '0.4.4',
  summary:  'Simple i18n support for Meteor apps using Blaze templates (Meteor 2.x & 3.x compatible)',
  git:      'https://github.com/vlasky/meteor-blaze-i18n.git',
});

Package.onUse(function (api, where) {
  api.versionsFrom('0.9.0', '2.0.0', '3.0.0');
  
  // Core dependencies that work across versions
  api.use('underscore', ['client', 'server']);
  
  // Use modern packages with version ranges for compatibility
  api.use('blaze@2.3.2 || 3.0.0', ['client', 'server']);
  api.use('tracker@1.0.0 || 1.3.0', ['client', 'server']);
  
  api.export('i18n', ['client', 'server']);
  api.addFiles('i18n.js', ['client', 'server']);
});

// Package.onTest(function(api){
//   api.use(['tinytest','handlebars','test-helpers','templating', 'test-helpers', 'jquery'], ['client', 'server']);
//   api.addFiles(['tests/shared/i18n.js']);
//   api.addFiles(['tests/client/i18n.js', 'tests/client/i18n.html'], ['client']);

// });


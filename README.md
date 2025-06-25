Notes for Meteor 3.0 compatibility
----------------------------------

This package is a fork of `anti:i18n` created as `vlasky:blaze-i18n` to support Meteor 3.0.



# Internationalization for Meteor

A simple (The simplest possible? Perhaps) i18n package for Meteor apps utilizing Blaze as the view layer.

# API



## `i18n(label)`

Get your localized text in Javascript.

Example: `i18n('store.purchase');`.



## `{{i18n label [params...]}}`

Get your localized text in Handlebars.

Example: `{{i18n "store.purchase"}}`.

Example: `{{i18n "path" "here" "there"}}`

## `{{i18n "sayHello" userName}}`

Provide arguments


## `i18n.map(language, map)`

Add new text map.

Example:

    i18n.map('en', {
      sayHello: 'Hi {$1}',
      store: {
        purchase: 'buy now',
        basket: 'basket',
      },
      path: 'From: {$1} to: {$2}',
      'shipping.options': 'shipping',
    });


## `i18n.setLanguage(language)`

Set your current language.

Example: `i18n.setLanguage('en_US')`.



## `i18n.setDefaultLanguage(language)`

Set your default language. This is the base language, if there is no translation to the currently chosen one,
default language will be used instead.

Example: `i18n.setDefaultLanguage('en_US')`.



## `i18n.getLanguage()`

Get the current language code.

## Advanced options

### `i18n.showMissing(missing)`

Decide whether to show a warning when there's no translation in the current and default language.

- `false`: Display nothing (default).
- `true`: Display the placeholder in default format, `[<%= label %>]`.
- *String*: Display the placeholder in custom format. The given string will be used as underscore template with the following parameters:
    - `label`
    - `language`
    - `defaultLanguage`

Example: `i18n.showMissing('[no translation for "<%= label %>" in <%= language %>]');`







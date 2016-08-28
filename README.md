# stylelint-config-standard

[![NPM version](http://img.shields.io/npm/v/stylelint-config-standard.svg)](https://www.npmjs.org/package/stylelint-config-standard) [![Build Status](https://travis-ci.org/stylelint/stylelint-config-standard.svg?branch=master)](https://travis-ci.org/stylelint/stylelint-config-standard) [![Build status](https://ci.appveyor.com/api/projects/status/o8rfhyax6n7bjnlt/branch/master?svg=true)](https://ci.appveyor.com/project/stylelint/stylelint-config-standard/branch/master)

> The standard shareable config for stylelint.

Use it as is or as a foundation for your own config.

It is derived from the common rules found within a handful of CSS styleguides, including: [The Idiomatic CSS Principles](https://github.com/necolas/idiomatic-css),
[Github's PrimerCSS Guidelines](http://primercss.io/guidelines/#scss),
[Google's CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.xml#CSS_Formatting_Rules), [Airbnb's Styleguide](https://github.com/airbnb/css#css), and [@mdo's Code Guide](http://codeguide.co/#css).

It favours flexibility over strictness for things like multi-line lists and single-line rulesets, and tries to avoid potentially divisive rules.

## Example

```css
@import url(x.css);
@import url(y.css);

/**
 * Multi-line comment
 */

.selector-1,
.selector-2,
.selector-3[type="text"] {
  background: linear-gradient(#fff, rgba(0, 0, 0, 0.8));
  box-sizing: border-box;
  display: block;
  color: #333;
}

.selector-a,
.selector-b:not(:first-child) {
  padding: 10px !important;
  top: calc(calc(1em * 2) / 3);
}

.selector-x { width: 10%; }
.selector-y { width: 20%; }
.selector-z { width: 30%; }

/* Single-line comment */

@media (min-width >= 60em) {
  .selector {
    /* Flush to parent comment */
    transform: translate(1, 1) scale(3);
  }
}

@media (orientation: portrait), projection and (color) {
  .selector-i + .selector-ii {
    background: color(rgb(0, 0, 0) lightness(50%));
    font-family: helvetica, "arial black", sans-serif;
  }
}

/* Flush single line comment */
@media
  screen and (min-resolution: 192dpi),
  screen and (min-resolution: 2dppx) {
  .selector {
    background-image:
      repeating-linear-gradient(
        -45deg,
        transparent,
        #fff 25px,
        rgba(255, 255, 255, 1) 50px
      );
    margin: 10px;
    margin-bottom: 5px;
    box-shadow:
      0 1px 1px #000,
      0 1px 0 #fff,
      2px 2px 1px 1px #ccc inset;
    height: 10rem;
  }

  /* Flush nested single line comment */
  .selector::after {
    content: '→';
    background-image: url(x.svg);
  }
}
```

*Note: the config is tested against this example, as such the example contains plenty of CSS syntax, formatting and features.*

## Installation

```bash
npm install stylelint-config-standard --save-dev
```

## Usage

If you've installed `stylelint-config-standard` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "stylelint-config-standard"
}
```

If you've globally installed `stylelint-config-standard` using the `-g` flag, then you'll need to use the absolute path to `stylelint-config-standard` in your config e.g.

```json
{
  "extends": "/absolute/path/to/stylelint-config-standard"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `indentation` to tabs, turn off the `number-leading-zero` rule, change the `property-no-unknown` rule to use its `ignoreAtRules` option and add the `unit-whitelist` rule:

```json
{
  "extends": "stylelint-config-standard",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null,
    "property-no-unknown": [ true, {
      "ignoreProperties": [
        "composes"
      ]
    }],
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```

#### Suggested additions

`stylelint-config-standard` is a great foundation for your own config. You can extend it create a tailored and much stricter config:

-   Specify what quotes must be used using:
    -   [`font-family-name-quotes`](https://github.com/stylelint/stylelint/blob/master/src/rules/font-family-name-quotes/README.md)
    -   [`function-url-quotes`](https://github.com/stylelint/stylelint/blob/master/src/rules/function-url-quotes/README.md)
    -   [`selector-attribute-quotes`](https://github.com/stylelint/stylelint/blob/master/src/rules/selector-attribute-quotes/README.md)
    -   [`string-quotes`](https://github.com/stylelint/stylelint/blob/master/src/rules/string-quotes/README.md)
-   Specify the order of properties using:
    -   [`declaration-block-properties-order`](https://github.com/stylelint/stylelint/blob/master/src/rules/declaration-block-properties-order/README.md)
-   If you use [`autoprefixer`](https://github.com/postcss/autoprefixer) you'll want to disallow vendor prefixes using:
    -   [`at-rule-no-vendor-prefix`](https://github.com/stylelint/stylelint/blob/master/src/rules/at-rule-no-vendor-prefix/README.md)
    -   [`media-feature-name-no-vendor-prefix`](https://github.com/stylelint/stylelint/blob/master/src/rules/media-feature-name-no-vendor-prefix/README.md)
    -   [`property-no-vendor-prefix`](https://github.com/stylelint/stylelint/blob/master/src/rules/property-no-vendor-prefix/README.md)
    -   [`selector-no-vendor-prefix`](https://github.com/stylelint/stylelint/blob/master/src/rules/selector-no-vendor-prefix/README.md)
    -   [`value-no-vendor-prefix`](https://github.com/stylelint/stylelint/blob/master/src/rules/value-no-vendor-prefix/README.md)
-   Control specificity using:
    -   [`max-nesting-depth`](https://github.com/stylelint/stylelint/blob/master/src/rules/max-nesting-depth/README.md)
    -   [`selector-max-compound-selectors`](https://github.com/stylelint/stylelint/blob/master/src/rules/selector-max-compound-selectors/README.md)
    -   [`selector-max-specificity`](https://github.com/stylelint/stylelint/blob/master/src/rules/selector-max-specificity/README.md)
-   Specify acceptable selector types, units, properties, functions and words in comments using:
    -   [`at-rule-blacklist`](https://github.com/stylelint/stylelint/blob/master/src/rules/at-rule-blacklist/README.md)
    -   [`at-rule-no-unknown`](https://github.com/stylelint/stylelint/blob/master/src/rules/at-rule-no-unknown/README.md)
    -   [`at-rule-whitelist`](https://github.com/stylelint/stylelint/blob/master/src/rules/at-rule-whitelist/README.md)
    -   [`color-named`](https://github.com/stylelint/stylelint/blob/master/src/rules/color-named/README.md)
    -   [`color-no-hex`](https://github.com/stylelint/stylelint/blob/master/src/rules/color-no-hex/README.md)
    -   [`comment-word-blacklist`](https://github.com/stylelint/stylelint/blob/master/src/rules/comment-word-blacklist/README.md)
    -   [`declaration-no-important`](https://github.com/stylelint/stylelint/blob/master/src/rules/declaration-no-important/README.md)
    -   [`declaration-property-unit-blacklist`](https://github.com/stylelint/stylelint/blob/master/src/rules/declaration-property-unit-blacklist/README.md)
    -   [`declaration-property-unit-whitelist`](https://github.com/stylelint/stylelint/blob/master/src/rules/declaration-property-unit-whitelist/README.md)
    -   [`declaration-property-value-blacklist`](https://github.com/stylelint/stylelint/blob/master/src/rules/declaration-property-value-blacklist/README.md)
    -   [`declaration-property-value-whitelist`](https://github.com/stylelint/stylelint/blob/master/src/rules/declaration-property-value-whitelist/README.md)
    -   [`function-blacklist`](https://github.com/stylelint/stylelint/blob/master/src/rules/function-blacklist/README.md)
    -   [`function-url-scheme-whitelist`](https://github.com/stylelint/stylelint/blob/master/src/rules/function-url-scheme-whitelist/README.md)
    -   [`function-whitelist`](https://github.com/stylelint/stylelint/blob/master/src/rules/function-whitelist/README.md)
    -   [`property-blacklist`](https://github.com/stylelint/stylelint/blob/master/src/rules/property-blacklist/README.md)
    -   [`property-whitelist`](https://github.com/stylelint/stylelint/blob/master/src/rules/property-whitelist/README.md)
    -   [`selector-attribute-operator-blacklist`](https://github.com/stylelint/stylelint/blob/master/src/rules/selector-attribute-operator-blacklist/README.md)
    -   [`selector-attribute-operator-whitelist`](https://github.com/stylelint/stylelint/blob/master/src/rules/selector-attribute-operator-whitelist/README.md)
    -   [`selector-no-attribute`](https://github.com/stylelint/stylelint/blob/master/src/rules/selector-no-attribute/README.md)
    -   [`selector-no-combinator`](https://github.com/stylelint/stylelint/blob/master/src/rules/selector-no-combinator/README.md)
    -   [`selector-no-id`](https://github.com/stylelint/stylelint/blob/master/src/rules/selector-no-id/README.md)
    -   [`selector-no-qualifying-type`](https://github.com/stylelint/stylelint/blob/master/src/rules/selector-no-qualifying-type/README.md)
    -   [`selector-no-type`](https://github.com/stylelint/stylelint/blob/master/src/rules/selector-no-type/README.md)
    -   [`selector-no-universal`](https://github.com/stylelint/stylelint/blob/master/src/rules/selector-no-universal/README.md)
    -   [`selector-pseudo-class-blacklist`](https://github.com/stylelint/stylelint/blob/master/src/rules/selector-pseudo-class-blacklist/README.md)
    -   [`selector-pseudo-class-whitelist`](https://github.com/stylelint/stylelint/blob/master/src/rules/selector-pseudo-class-whitelist/README.md)
    -   [`unit-blacklist`](https://github.com/stylelint/stylelint/blob/master/src/rules/property-blacklist/README.md)
    -   [`unit-whitelist`](https://github.com/stylelint/stylelint/blob/master/src/rules/property-blacklist/README.md)
-   Specify acceptable naming patterns using:
    -   [`custom-media-pattern`](https://github.com/stylelint/stylelint/blob/master/src/rules/custom-media-pattern/README.md)
    -   [`custom-property-pattern`](https://github.com/stylelint/stylelint/blob/master/src/rules/custom-property-pattern/README.md)
    -   [`selector-class-pattern`](https://github.com/stylelint/stylelint/blob/master/src/rules/selector-class-pattern/README.md)
    -   [`selector-id-pattern`](https://github.com/stylelint/stylelint/blob/master/src/rules/selector-id-pattern/README.md)
    -   [`selector-nested-pattern`](https://github.com/stylelint/stylelint/blob/master/src/rules/selector-nested-pattern/README.md)
-   Specify a notation when there are one or more valid representations using:
    -   [`font-weight-notation`](https://github.com/stylelint/stylelint/blob/master/src/rules/font-weight-notation/README.md)
-   Specify the acceptable use of custom properties using:
    -   [`custom-property-no-outside-root`](https://github.com/stylelint/stylelint/blob/master/src/rules/custom-property-no-outside-root/README.md)
    -   [`selector-root-no-composition`](https://github.com/stylelint/stylelint/blob/master/src/rules/selector-root-no-composition/README.md)
-   Specify what types of URLs are allowed using:
    -   [`function-url-data-uris`](https://github.com/stylelint/stylelint/blob/master/src/rules/function-url-data-uris/README.md)
    -   [`function-url-no-scheme-relative`](https://github.com/stylelint/stylelint/blob/master/src/rules/function-url-no-scheme-relative/README.md)
-   Specify a maximum line length using:
    -   [`max-line-length`](https://github.com/stylelint/stylelint/blob/master/src/rules/max-line-length/README.md)
-   Catch possible mistakes related to your targeted browsers using:
    -   [`no-browser-hacks`](https://github.com/stylelint/stylelint/blob/master/src/rules/no-browser-hacks/README.md)
    -   [`no-unsupported-browser-features`](https://github.com/stylelint/stylelint/blob/master/src/rules/no-unsupported-browser-features/README.md)

### Using the config with SugarSS syntax

The config is broadly compatible with [SugarSS](https://github.com/postcss/sugarss) syntax. You *will* need to turn off the `declaration-block-trailing-semicolon` rule, as so:

```json
{
  "extends": "stylelint-config-standard",
  "rules": {
    "declaration-block-trailing-semicolon": null
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)

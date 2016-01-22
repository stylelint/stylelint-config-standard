# stylelint-config-standard
[![NPM version](http://img.shields.io/npm/v/stylelint-config-standard.svg)](https://www.npmjs.org/package/stylelint-config-standard) [![Travis Build Status](https://img.shields.io/travis/stylelint/stylelint-config-standard/master.svg?label=unix%20build)](https://travis-ci.org/stylelint/stylelint-config-standard) [![AppVeyor Build Status](https://img.shields.io/appveyor/ci/stylelint/stylelint-config-standard/master.svg?label=windows%20build)](https://ci.appveyor.com/project/stylelint/stylelint-config-standard)

> The standard shareable config for stylelint.

Use it as is or as a foundation for your own config.

It is derived from the common rules found within a handful of CSS styleguides, including: [The Idiomatic CSS Principles](https://github.com/necolas/idiomatic-css),
[Github's PrimerCSS Guidelines](http://primercss.io/guidelines/#scss),
[Google's CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.xml#CSS_Formatting_Rules), [Airbnb's Styleguide](https://github.com/airbnb/css#css), and [@mdo's Code Guide](http://codeguide.co/#css).

It favours flexibility over strictness for things like multi-line lists and single-line rulesets, and tries to avoid potentially divisive rules.

## Example

```css
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
.selector-b {
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

@media (min-orientation: portrait), projection and (color) {
  .selector-i + .selector-ii {
    background: color(rgb(0, 0, 0) lightness(50%));
    font-family: helvetica, arial, sans-serif;
  }
}

/* Flush single line comment */
@media screen and (min-device-pixel-ratio: 2),
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
    content: "→";
    background-image: url("x.svg");
  }
}

```

_Note: the config is tested against this example, as such the example contains plenty of CSS syntax, formatting and features._

## Installation

```console
$ npm install stylelint-config-standard
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "stylelint-config-standard"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs and turn off the `number-leading-zero` rule:


```json
{
  "extends": "stylelint-config-standard",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)

# stylelint-config-standard

[![NPM version](https://img.shields.io/npm/v/stylelint-config-standard.svg)](https://www.npmjs.org/package/stylelint-config-standard) [![Build Status](https://github.com/stylelint/stylelint-config-standard/workflows/CI/badge.svg)](https://github.com/stylelint/stylelint-config-standard/actions)

> The standard shareable config for Stylelint.

It extends [`stylelint-config-recommended`](https://github.com/stylelint/stylelint-config-recommended) and turns on additional rules to enforce modern conventions found in the [CSS specifications](https://www.w3.org/Style/CSS/current-work) and within [Baseline Widely Available](https://web.dev/baseline).

To see the rules that this config uses, please read the [config itself](./index.js).

## Example

```css
@import url("reset.css") layer(reset);

/**
 * Multi-line comment
 */

@keyframes fade-in {
  to {
    opacity: 1;
  }
}

@layer elements {
  :root {
    --blue: light-dark(#06b, #3af);
  }

  /* Single-line comment */

  html {
    color-scheme: light dark;

    @media (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }
  }

  a:visited {
    color: oklch(from var(--blue) l c calc(h + 35));
  }
}

/* Flush single line comment */
@layer custom-elements {
  @scope (cards-element) {
    :scope {
      /* Flush to parent comment */
      display: block grid;

      &:has(> :nth-child(3)) {
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      }
    }
  }

  @scope (card-element) to (slot) {
    :scope {
      container: card / inline-size;
      padding-inline: clamp(1rem, 5cqi, 2rem);
    }

    h2:not(.foo, .bar) {
      font-family: "Arial Black", sans-serif;

      @container card (inline-size >= 10rem) {
        place-self: end;
      }
    }
  }
}
```

_Note: the config is tested against this example, as such the example contains plenty of modern CSS syntax and features._

## Installation

```bash
npm install stylelint-config-standard --save-dev
```

## Usage

Set your Stylelint config to:

```json
{
  "extends": "stylelint-config-standard"
}
```

### Extending the config

Add a `"rules"` key to your config, then add your overrides and additions there.

You can turn off rules by setting its value to `null`. For example:

```json
{
  "extends": "stylelint-config-standard",
  "rules": {
    "selector-class-pattern": null
  }
}
```

Or lower the severity of a rule to a warning using the `severity` secondary option. For example:

```json
{
  "extends": "stylelint-config-standard",
  "rules": {
    "property-no-vendor-prefix": [
      true,
      {
        "severity": "warning"
      }
    ]
  }
}
```

Or to add a rule, For example, the `unit-allowed-list` one:

```json
{
  "extends": "stylelint-config-standard",
  "rules": {
    "unit-allowed-list": ["em", "rem", "s"]
  }
}
```

We recommend adding more of [Stylelint's rules](https://stylelint.io/user-guide/rules/) to your config as these rules need to be configured to suit your specific needs.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)

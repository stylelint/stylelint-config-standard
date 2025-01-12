# Changelog

## 37.0.0

- Removed: `stylelint` less than `16.13.0` from peer dependencies.
- Changed: updated to [`stylelint-config-recommended@15.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/15.0.0).

## 36.0.1

- Fixed: missing `funding` field in `package.json`.

## 36.0.0

- Removed: `stylelint` less than `16.1.0` from peer dependencies.
- Added: `lightness-notation: "percentage"` rule.

## 35.0.0

- Removed: `stylelint` less than `16.0.0` from peer dependencies.
- Removed: Node.js less than `18.12.0` support.
- Changed: updated to [`stylelint-config-recommended@14.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/14.0.0).

## 34.0.0

- Removed: `stylelint` less than `15.10.0` from peer dependencies
- Changed: updated to [`stylelint-config-recommended@13.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/13.0.0).

## 33.0.0

- Removed: `stylelint` less than `15.5.0` from peer dependencies.
- Changed: updated to [`stylelint-config-recommended@12.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/12.0.0).
- Changed: restored `declaration-block-single-line-max-declarations` removed on `30.0.0`.

## 32.0.0

- Removed: `stylelint` less than `15.4.0` from peer dependencies.
- Added: `media-feature-range-notation: "context"` rule.

## 31.0.0

- Removed: `stylelint` less than `15.3.0` from peer dependencies.
- Changed: updated to [`stylelint-config-recommended@11.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/11.0.0).

## 30.0.1

- Fixed: updated to [`stylelint-config-recommended@10.0.1`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/10.0.1).

## 30.0.0

- Removed: `stylelint` less than `15.0.0` from peer dependencies.
- Removed: 64 rules deprecated in [`stylelint@15.0.0`](https://github.com/stylelint/stylelint/releases/tag/15.0.0). For details, see the [migration guide](https://github.com/stylelint/stylelint/blob/15.0.0/docs/migration-guide/to-15.md).
- Fixed: `length-zero-no-unit` to ignore custom properties.
- Fixed: `value-no-vendor-prefix` to ignore `-webkit-inline-box`.

## 29.0.0

- Removed: `stylelint` less than `14.14.0` from peer dependencies.
- Changed: `import-notation` to be `"url"`.
- Added: custom parameter messages to `*-pattern` rules.
- Fixed: `value-no-vendor-prefix` to ignore `-webkit-box`.

## 28.0.0

- Removed: `stylelint` less than `14.11.0` from peer dependencies.
- Changed: `alpha-value-notation` to be `"number"` for SVG `*-opacity` properties.

## 27.0.0

- Removed: `stylelint` less than `14.10.0` from peer dependencies.
- Changed: updated to [`stylelint-config-recommended@9.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/9.0.0).
- Added: `keyframe-selector-notation` rule.

## 26.0.0

- Removed: `stylelint` less than `14.9.0` from peer dependencies.
- Changed: updated to [`stylelint-config-recommended@8.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/8.0.0).
- Added: `import-notation` rule.
- Added: `selector-not-notation` rule.

## 25.0.0

- Removed: `stylelint` less than `14.4.0` from peer dependencies.
- Changed: updated to [`stylelint-config-recommended@7.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/7.0.0).

## 24.0.0

- Changed: `alpha-value-notation` to be `"number"` for `opacity` property.

## 23.0.0

This release adds over a dozen new rules.

If needed, you can [extend the config](README.md#extending-the-config) to turn off or lower the severity of any of the new rules.

We recommend using [Autoprefixer](https://github.com/postcss/autoprefixer) to automatically prefix your at-rules, properties, selectors and values.

- Removed: `stylelint` less than `14.0.0` from peer dependencies.
- Changed: updated to [`stylelint-config-recommended@6.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/6.0.0).
- Added: `alpha-value-notation` rule.
- Added: `at-rule-no-vendor-prefix` rule.
- Added: `color-function-notation` rule.
- Added: `custom-media-pattern` rule.
- Added: `custom-property-pattern` rule.
- Added: `declaration-block-no-redundant-longhand-properties` rule.
- Added: `font-family-name-quotes` rule.
- Added: `function-url-quotes` rule.
- Added: `hue-degree-notation` rule.
- Added: `keyframes-name-pattern` rule.
- Added: `max-line-length` rule.
- Added: `media-feature-name-no-vendor-prefix` rule.
- Added: `no-empty-first-line` rule.
- Added: `no-irregular-whitespace` rule.
- Added: `number-max-precision` rule.
- Added: `property-no-vendor-prefix` rule.
- Added: `selector-attribute-quotes` rule.
- Added: `selector-class-pattern` rule.
- Added: `selector-id-pattern` rule.
- Added: `selector-no-vendor-prefix` rule.
- Added: `shorthand-property-no-redundant-values` rule.
- Added: `string-quotes` rule.
- Added: `value-no-vendor-prefix` rule.

## 22.0.0

- Removed: `stylelint` less than `13.13.0` from peer dependencies.
- Changed: updated to [`stylelint-config-recommended@5.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/5.0.0).

## 21.0.0

- Removed: `stylelint` less than `13.12.0` from peer dependencies.
- Changed: updated to [`stylelint-config-recommended@4.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/4.0.0).

## 20.0.0

- Added: `value-keyword-case` rule.

## 19.0.0

- Removed: `stylelint` < 10.1.0 from peer dependencies. `stylelint@10.1.0+` is required now.
- Changed: updated to [`stylelint-config-recommended@3.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/3.0.0).

## 18.3.0

- Added: `stylelint@10` to peer dependency range.

## 18.2.0

- Added: `stylelint-config-recommended@2.1.0` as dependency

## 18.1.0

- Added: `stylelint@9` to peer dependency range.

## 18.0.0

- Changed: updated to [`stylelint-config-recommended@2.0.0`](https://github.com/stylelint/stylelint-config-recommended/releases/tag/2.0.0).

## 17.0.0

- Changed: now extends [`stylelint-config-recommended`](https://github.com/stylelint/stylelint-config-recommended), which turns on the `at-rule-no-unknown` rule. Therefore, if you use non-standard at-rules, like those introduced in SCSS and Less (e.g. `@extends`, `@includes` etc), be sure to [extend the config](README.md#extending-the-config) and make use of `at-rule-no-unknown`'s [`ignoreAtRules: []` secondary option](https://github.com/stylelint/stylelint/tree/main/lib/rules/at-rule-no-unknown#ignoreatrules-regex-string).

## 16.0.0

- Changed: replaced the deprecated `rule-nested-empty-line-before` and `rule-non-nested-empty-line-before` rules with the `rule-empty-line-before` rule.

## 15.0.1

- Fixed: URLs to stylelint rules within README.

## 15.0.0

- Removed: `declaration-block-no-ignored-properties` rule.
- Removed: `media-feature-no-missing-punctuation` rule.
- Removed: `selector-no-empty` rule.
- Added: `font-family-no-duplicate-names` rule.

## 14.0.0

- Added: `selector-no-empty` rule.

## 13.0.2

- Fixed: the `ignore: ["consecutive-duplicates-with-different-values"` optional secondary option was wrongly assigned to `declaration-block-no-ignored-properties`.

## 13.0.1

- Fixed: `declaration-block-no-duplicate-properties` now uses the `ignore: ["consecutive-duplicates-with-different-values"` optional secondary option.

## 13.0.0

- Added: `declaration-block-no-duplicate-properties` rule.
- Added: `declaration-block-no-redundant-longhand-properties` rule.
- Added: `media-feature-name-no-unknown` rule.
- Added: `property-no-unknown` rule.
- Added: `selector-descendant-combinator-no-non-space` rule.
- Added: `value-list-max-empty-lines` rule.

## 12.0.0

- Changed: `at-rule-empty-line-before` now uses the `blockless-after-same-name-blockless` `except` option, rather than the `blockless-group` one.
- Added: `block-closing-brace-empty-line-before` rule.
- Added: `comment-no-empty` rule.
- Added: `custom-property-empty-line-before` rule.
- Added: `declaration-empty-line-before` rule.
- Added: `media-feature-name-case` rule.
- Added: `rule-nested-empty-line-before` rule.

## 11.0.0

- Removed: `at-rule-no-unknown` rule.
- Removed: `media-feature-parentheses-space-inside` rule.
- Removed: `no-missing-eof-newline` rule.
- Changed: `indentation` no longer uses the `indentInsideParens: "once"` option, as this is the default behaviour in `stylelint@7.0.0`.
- Added: `media-feature-parentheses-space-inside` rule.
- Added: `no-missing-end-of-source-newline` rule.

## 10.0.0

- Changed: `indentation` now uses the `indentInsideParens: "once"` option.
- Added: `at-rule-no-unknown` rule.
- Added: `no-empty-source` rule.

## 9.0.0

- Removed: `number-zero-length-no-unit` rule.
- Added: `length-zero-no-unit` rule.

## 8.0.0

- Added: `keyframe-declaration-no-important` rule.
- Added: `selector-pseudo-class-no-unknown` rule.
- Added: `selector-type-no-unknown` rule.

## 7.0.0

- Added: `at-rule-name-space-after` rule.
- Added: `function-max-empty-lines` rule.
- Added: `no-extra-semicolons` rule.
- Added: `selector-attribute-brackets-space-inside` rule.
- Added: `selector-attribute-operator-space-after` rule.
- Added: `selector-attribute-operator-space-before` rule.
- Added: `selector-max-empty-lines` rule.
- Added: `selector-pseudo-class-parentheses-space-inside` rule.
- Added: `selector-pseudo-element-no-unknown` rule.
- Added: `shorthand-property-no-redundant-values` rule.

## 6.0.0

- Added: `at-rule-name-case` rule.
- Added: `at-rule-semicolon-newline-after` rule.
- Added: `function-name-case` rule.
- Added: `property-case` rule.
- Added: `selector-pseudo-class-case` rule.
- Added: `selector-pseudo-element-case` rule.
- Added: `selector-type-case` rule.
- Added: `unit-case` rule.
- Added: `unit-no-unknown` rule.

## 5.0.0

- Removed: `font-family-name-quotes`, `function-url-quotes` and `string-quotes` rules.
- Added: `declaration-block-no-ignored-properties` rule.

## 4.0.1

- Fixed: include peerDependencies in `package.json` to expose compatibility.

## 4.0.0

- Removed: `stylelint < 4.5.0` compatibility.
- Added: `font-family-name-quotes` rule with `"double-where-recommended"` option.
- Added: `function-linear-gradient-no-nonstandard-direction` rule.
- Added: `media-feature-no-missing-punctuation` rule.
- Added: `no-invalid-double-slash-comments` rule.
- Added: `string-no-newline` rule.

## 3.0.0

- Changed: first-nested at-rules now behave the same as first-nested comments i.e. they can no longer be preceded by an empty line.

## 2.0.0

- Changed: first-nested comments can no longer be preceded by an empty line.
- Fixed: `comment-empty-line-before` now ignores `stylelint` command comments.

## 1.0.0

- Fixed: more forgiving empty lines rules when comments are present i.e. the `rule-non-nested-empty-line-before` and `at-rule-empty-line-before` now make use of the `ignore: ["after-comment"]` option.

## 0.2.0

- Added: `block-no-empty` rule.

## 0.1.0

- Initial release

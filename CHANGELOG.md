# 13.0.2

-   Fixed: the `ignore: ["consecutive-duplicates-with-different-values"` optional secondary option was wrongly assigned to `declaration-block-no-ignored-properties`.

# 13.0.1

-   Fixed: `declaration-block-no-duplicate-properties` now uses the `ignore: ["consecutive-duplicates-with-different-values"` optional secondary option.

# 13.0.0

-   Added: `declaration-block-no-duplicate-properties` rule.
-   Added: `declaration-block-no-redundant-longhand-properties` rule.
-   Added: `media-feature-name-no-unknown` rule.
-   Added: `property-no-unknown` rule.
-   Added: `selector-descendant-combinator-no-non-space` rule.
-   Added: `value-list-max-empty-lines` rule.

# 12.0.0

-   Changed: `at-rule-empty-line-before` now uses the `blockless-after-same-name-blockless` `except` option, rather than the `blockless-group` one.
-   Added: `block-closing-brace-empty-line-before` rule.
-   Added: `comment-no-empty` rule.
-   Added: `custom-property-empty-line-before` rule.
-   Added: `declaration-empty-line-before` rule.
-   Added: `media-feature-name-case` rule.
-   Added: `rule-nested-empty-line-before` rule.

# 11.0.0

-   Removed: `at-rule-no-unknown` rule.
-   Removed: `media-feature-parentheses-space-inside` rule.
-   Removed: `no-missing-eof-newline` rule.
-   Changed: `indentation` no longer uses the `indentInsideParens: "once"` option, as this is the default behaviour in `stylelint@7.0.0`.
-   Added: `media-feature-parentheses-space-inside` rule.
-   Added: `no-missing-end-of-source-newline` rule.

# 10.0.0

-   Changed: `indentation` now uses the `indentInsideParens: "once"` option.
-   Added: `at-rule-no-unknown` rule.
-   Added: `no-empty-source` rule.

# 9.0.0

-   Removed: `number-zero-length-no-unit` rule.
-   Added: `length-zero-no-unit` rule.

# 8.0.0

-   Added: `keyframe-declaration-no-important` rule.
-   Added: `selector-pseudo-class-no-unknown` rule.
-   Added: `selector-type-no-unknown` rule.

# 7.0.0

-   Added: `at-rule-name-space-after` rule.
-   Added: `function-max-empty-lines` rule.
-   Added: `no-extra-semicolons` rule.
-   Added: `selector-attribute-brackets-space-inside` rule.
-   Added: `selector-attribute-operator-space-after` rule.
-   Added: `selector-attribute-operator-space-before` rule.
-   Added: `selector-max-empty-lines` rule.
-   Added: `selector-pseudo-class-parentheses-space-inside` rule.
-   Added: `selector-pseudo-element-no-unknown` rule.
-   Added: `shorthand-property-no-redundant-values` rule.

# 6.0.0

-   Added: `at-rule-name-case` rule.
-   Added: `at-rule-semicolon-newline-after` rule.
-   Added: `function-name-case` rule.
-   Added: `property-case` rule.
-   Added: `selector-pseudo-class-case` rule.
-   Added: `selector-pseudo-element-case` rule.
-   Added: `selector-type-case` rule.
-   Added: `unit-case` rule.
-   Added: `unit-no-unknown` rule.

# 5.0.0

-   Removed: `font-family-name-quotes`, `function-url-quotes` and `string-quotes` rules.
-   Added: `declaration-block-no-ignored-properties` rule.

# 4.0.1

-   Fixed: include peerDependencies in `package.json` to expose compatibility.

# 4.0.0

-   Removed: `stylelint < 4.5.0` compatibility.
-   Added: `font-family-name-quotes` rule with `"double-where-recommended"` option.
-   Added: `function-linear-gradient-no-nonstandard-direction` rule.
-   Added: `media-feature-no-missing-punctuation` rule.
-   Added: `no-invalid-double-slash-comments` rule.
-   Added: `string-no-newline` rule.

# 3.0.0

-   Changed: first-nested at-rules now behave the same as first-nested comments i.e. they can no longer be preceded by an empty line.

# 2.0.0

-   Changed: first-nested comments can no longer be preceded by an empty line.
-   Fixed: `comment-empty-line-before` now ignores `stylelint` command comments.

# 1.0.0

-   Fixed: more forgiving empty lines rules when comments are present i.e. the `rule-non-nested-empty-line-before` and `at-rule-empty-line-before` now make use of the `ignore: ["after-comment"]` option.

# 0.2.0

-   Added: `block-no-empty` rule.

# 0.1.0

-   Initial release

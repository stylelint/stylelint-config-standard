# Head

- Removed: `stylelint < 4.3.0` compatibility.
- Added: `font-family-name-quotes` rule with double quotes where recommended option.
- Added: `media-feature-no-missing-punctuation` rule.
- Added: `no-invalid-double-slash-comments` rule.

# 3.0.0

- Changed: first-nested at-rules now behave the same as first-nested comments i.e. they can no longer be preceded by an empty line.

# 2.0.0

- Changed: first-nested comments can no longer be preceded by an empty line.
- Fixed: `comment-empty-line-before` now ignores `stylelint` command comments.

# 1.0.0

- Fixed: more forgiving empty lines rules when comments are present i.e. the `rule-non-nested-empty-line-before` and `at-rule-empty-line-before` now make use of the `ignore: ["after-comment"]` option.

# 0.2.0

- Added: `block-no-empty` rule.

# 0.1.0

- Initial release

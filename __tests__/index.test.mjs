import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

import stylelint from 'stylelint';
import config from '../index.js';

describe('flags no warnings with valid css', () => {
	const validCss = fs.readFileSync('./__tests__/valid.css', 'utf-8');
	let result;

	beforeEach(async () => {
		result = await stylelint.lint({
			code: validCss,
			config,
		});
	});

	it('did not error', () => {
		assert.equal(result.errored, false);
	});

	it('flags no warnings', () => {
		assert.equal(result.results[0].warnings.length, 0);
	});
});

describe('flags warnings with invalid css', () => {
	const invalidCss = fs.readFileSync('./__tests__/invalid.css', 'utf-8');
	let result;

	beforeEach(async () => {
		result = await stylelint.lint({
			code: invalidCss,
			config,
		});
	});

	it('did error', () => {
		assert.equal(result.errored, true);
	});

	it('flags warnings', () => {
		assert.equal(result.results[0].warnings.length, 5);
	});

	it('correct warning text', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.text),
			[
				'Expected custom media query name "--FOO" to be kebab-case',
				'Expected custom property name "--FOO" to be kebab-case',
				'Expected keyframe name "FOO" to be kebab-case',
				'Expected class selector ".FOO" to be kebab-case',
				'Expected id selector "#FOO" to be kebab-case',
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'custom-media-pattern',
				'custom-property-pattern',
				'keyframes-name-pattern',
				'selector-class-pattern',
				'selector-id-pattern',
			],
		);
	});

	it('correct severity flagged', () => {
		assert.equal(result.results[0].warnings[0].severity, 'error');
	});

	it('correct line number', () => {
		assert.equal(result.results[0].warnings[0].line, 1);
	});

	it('correct column number', () => {
		assert.equal(result.results[0].warnings[0].column, 15);
	});
});

describe('deprecated rules are excluded', () => {
	const ruleNames = Object.keys(config.rules);

	it('is not empty', () => {
		assert.ok(ruleNames.length > 0);
	});

	for (const ruleName of ruleNames) {
		it(`${ruleName}`, async () => {
			const rule = await stylelint.rules[ruleName];

			assert.ok(!rule.meta.deprecated);
		});
	}
});

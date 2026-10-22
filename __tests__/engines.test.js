import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

describe('engines.node', () => {
	it("is the same as stylelint's one", () => {
		const stylelintVersion = pkg.peerDependencies.stylelint;
		const nodeVersion = JSON.parse(
			execFileSync('npm', [
				'view',
				'--json',
				`stylelint@${stylelintVersion}`,
				'engines.node',
			]).toString(),
		);

		// `^x.y.z` range can return multiple versions.
		const nodeVersions = Array.isArray(nodeVersion) ? [...new Set(nodeVersion)] : [nodeVersion];

		assert.equal(nodeVersions.length, 1);
		assert.ok(nodeVersions.includes(pkg.engines.node));
	});
});

'use strict';

const { execFileSync } = require('child_process');
const pkg = require('../package.json');

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

		expect(nodeVersions).toHaveLength(1);
		expect(nodeVersions).toContain(pkg.engines.node);
	});
});

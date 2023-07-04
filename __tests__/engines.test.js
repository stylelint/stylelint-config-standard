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

		expect(nodeVersion).toEqual(pkg.engines.node);
	});
});

import type { Config } from 'stylelint';

declare const config: Required<Pick<Config, 'extends' | 'rules'>>;
export default config;

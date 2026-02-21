import type { NgDocConfiguration } from '@ng-doc/builder';

const config: NgDocConfiguration = {
  docsPath: 'src/app/docs',
  /** Docs are under /docs so NgDoc generates correct links */
  routePrefix: 'docs',
};

export default config;

import { App } from './app';

import { base } from './collection/base/base.controller';
// import { base } from './controllers/base';
// import { link } from './controllers/link/link.controller';
// import * as api from './api';
// import * as utils from './utils';
  
export const core = App.Core({
  App,
  base
})

export type ICore = typeof core;

export default core;

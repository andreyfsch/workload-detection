import picture from './picture_controller.js';
import prev from './prev_controller.js';
import next from './next_controller.js';
import analyze from './analyze_controller.js';
import categorize from './categorize_controller.js';
import finalize from './finalize_controller.js';
import reset from './reset_controller.js';

const controllers =  {
  picture: picture,
  prev: prev,
  next: next,
  analyze: analyze,
  categorize: categorize,
  finalize: finalize,
  reset: reset
};

export default controllers;
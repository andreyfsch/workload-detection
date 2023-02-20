import categorizeService from './categorize_service.js';
import finalizeService from './finalize_service.js';
import pictureService from './picture_service.js';
import nextService from './next_service.js';
import prevService from './prev_service.js';

const services = {
  categorizeService: categorizeService,
  finalizeService: finalizeService,
  pictureService: pictureService,
  nextService: nextService,
  prevService: prevService
};

export default services;
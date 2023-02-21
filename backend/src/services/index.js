import pictureService from './picture_service.js';
import prevService from './prev_service.js';
import nextService from './next_service.js';
import analyzeService from './analyze_service.js';
import categorizeService from './categorize_service.js';
import finalizeService from './finalize_service.js';
import resetService from './reset_service.js';



const services = {
  pictureService: pictureService,
  prevService: prevService,
  nextService: nextService,
  analyzeService: analyzeService,
  categorizeService: categorizeService,
  finalizeService: finalizeService,
  resetService: resetService  
};

export default services;
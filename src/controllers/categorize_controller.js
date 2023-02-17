import { categorizeService } from '../services';

import { post } from './controller';

console.log('teste');

const categorize = post(req, res, next, categorizeService);

export default categorize;

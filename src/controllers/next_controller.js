import { nextService } from '../services';

import { post } from './controller';

const next = post(req, res, next, nextService);

export default next;
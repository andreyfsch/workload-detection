import { prevService } from '../services';

import { post } from './controller';

const prev = post(req, res, next, prevService);

export default prev;
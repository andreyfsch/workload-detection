import { finalizeService } from '../services';

import { post } from './controller';

const finalize = post(req, res, next, finalizeService);

export default finalize;
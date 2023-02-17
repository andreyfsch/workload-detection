import { pictureService } from '../services';

import { get } from './controller';

const picture = get(req, res, next, pictureService);

export default picture;
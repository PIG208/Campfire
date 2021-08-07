import { Operation } from 'express-openapi';
import utils from '../../../lib/utils';
import { campfireService } from '../../../services/campfireService';

export const post: Operation = (req, res) => {
    const id = req.params['id'];

    campfireService.participate(id as any).then(() => {
        utils.success(res);
    });
};

import utils from '../../../lib/utils';
import { Comment, Service } from 'campfire-api';
import { commentService } from '../../../services/commentService';
import { Operation } from 'express-openapi';

export const get: Operation = (req, res) => {
    const id = parseInt(req.params['id']);

    commentService.pickComment(id).then((result) => {
        if (result.length > 0) {
            utils.success(res, {
                comment: { id: result[0].id, content: result[0].content },
            });
        } else {
            utils.error(res, 'No comments', 200);
        }
    });
};

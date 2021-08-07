import utils from '../../../lib/utils';
import { Comment, Service } from 'campfire-api';
import { commentService } from '../../../services/commentService';
import { Operation } from 'express-openapi';

export const get: Operation = (req, res) => {
    const id = parseInt(req.params['id']);

    commentService.pickComment(id).then((result) => {
        utils.success(res, {
            id: result.id,
            content: result.content,
        } as Comment);
    });
};

export const post: Operation = (req, res) => {
    const id = parseInt(req.params['id']);
    const { content } = utils.extractBody(req, Service.postCampfireComment);

    commentService.addComment(id, content).then((result) => {
        utils.success(res, {
            result: 'success',
        });
    });
};

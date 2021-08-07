import utils from '../../lib/utils';
import { Comment, Service } from 'campfire-api';
import { commentService } from '../../services/commentService';
import { Operation } from 'express-openapi';

export const post: Operation = (req, res) => {
    //const id = parseInt(req.params['id']);
    console.log(req);
    const data = utils.extractBody(req, Service.postCampfireComment);
    console.log(data);

    commentService.addComment(data.id, data.content).then((result) => {
        console.log(result);
        utils.success(res, {
            result: 'success',
        });
    });
};

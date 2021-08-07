import { Service } from 'campfire-api';
import { Operation } from 'express-openapi';
import utils from '../lib/utils';
import { campfireService } from '../services/campfireService';

export const get: Operation = (req, res) => {
    const topic = req.params['topic'];

    campfireService.getCampfires(topic).then((result) => {
        utils.success(res, {
            campfires: result,
        });
    });
};

export const post: Operation = (req, res) => {
    const data = utils.extractBody(req, Service.postCampfire);

    campfireService.addCampfire(data.topic).then(result => {
        utils.success(res, {
            campfire: result
        });
    })
};
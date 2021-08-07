import { Service } from 'campfire-api';
import { Operation } from 'express-openapi';
import utils from '../lib/utils';
import { campfireService } from '../services/campfireService';

export const get: Operation = (req, res) => {
    const { topic, limit, random, id } = req.query as any;

    campfireService
        .getCampfires(topic, parseInt(limit), parseInt(id), Boolean(random))
        .then((result) => {
            utils.success(res, {
                campfires: result,
            });
        });
};

export const post: Operation = (req, res) => {
    const data = utils.extractBody(req, Service.postCampfire);

    campfireService.addCampfire(data.topic).then((result) => {
        utils.success(res, {
            campfire: result,
        });
    })
    .catch((error)=>{
        console.error(error);
        utils.error(res, "Topic already exists", 400);
    });
};

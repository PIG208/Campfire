import { Operation } from 'express-openapi';
import utils from '../../../lib/utils';
import { trendService } from '../../../services/trendService';
import { campfireService } from '../../../services/campfireService';

export const get: Operation = (req, res) => {
    trendService.giveTrend().then((result) => {
        if (result.length > 0) {
            Promise.all(
                (result as any).map((value: any) => {
                    return campfireService.getCampfires(undefined, 1, value.campfire_id).then(result=>result[0]);
                })
            ).then((data) => {
                console.log(data)
                utils.success(res, {
                    campfires: data,
                });
            });
        } else {
            utils.error(res, 'No fires', 200);
        }
    });
};

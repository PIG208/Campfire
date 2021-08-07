import { campfire, user } from '@prisma/client';
import { client } from '..';
import utils from '../lib/utils';

export const campfireService = {
    getCampfires(
        topic?: string,
        limit?: number,
        id?: number,
        random?: boolean
    ): Promise<(campfire & {participants: number})[]> {
        if (random) {
            return client.$queryRaw`SELECT campfire.*, IFNULL(t.c, 0) as participants FROM campfire LEFT OUTER JOIN (SELECT campfire_id, COUNT(*) as c FROM participation GROUP BY campfire_id)as t ON (t.campfire_id=campfire.id) ORDER BY rand() LIMIT ${limit ?? 1};`;
        } else {
            return client.campfire
                .findMany({
                    include: {
                        // @ts-ignore
                        _count: {
                            select: { participation: true },
                        },
                    },
                    where: {
                        topic: {
                            contains: topic,
                        },
                        id: utils.undefinedIfNaN(id),
                    },
                    take: utils.undefinedIfNaN(limit),
                })
                .then((result) =>
                    (result as any[]).map((value) => {
                        let temp = {
                            ...value,
                            participants: value._count.participation,
                        };
                        delete temp._count;
                        return temp;
                    })
                );
        }
    },
    getCampfiresRandom(limit: number) {},
    addCampfire(topic: string, user?: user) {
        return client.campfire.create({
            data: {
                topic: topic,
                creator_id: user?.id,
            },
        });
    },
    participate(campfireId: number, userId?: number) {
        return client.participation.create({
            data: {
                campfire_id: utils.undefinedIfNaN(campfireId),
                user_id: utils.undefinedIfNaN(userId),
            },
        });
    },
};

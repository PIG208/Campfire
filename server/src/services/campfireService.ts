import { user } from '@prisma/client';
import { client } from '..';

export const campfireService = {
    getCampfires(topic?: string, limit?: number, random: boolean = false) {
        if (random) {
            return client.$queryRaw`SELECT * FROM campfire ORDER BY rand() LIMIT ${limit}`;
        } else {
            return client.campfire.findMany({
                where: {
                    topic: {
                        contains: topic,
                    },
                },
                take: !isNaN(limit) ? limit : undefined,
            });
        }
    },
    addCampfire(topic: string, user?: user) {
        return client.campfire.create({
            data: {
                topic: topic,
                creator_id: user?.id,
            },
        });
    },
};

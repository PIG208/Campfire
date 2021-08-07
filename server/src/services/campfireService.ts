import { user } from '@prisma/client';
import { client } from '..';

export const campfireService = {
    getCampfires(topic?: string) {
        return client.campfire.findMany({
            where: {
                topic: {
                    contains: topic
                },
            },
        });
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

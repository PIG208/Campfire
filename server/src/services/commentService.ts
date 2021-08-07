import { comment } from '@prisma/client';
import { client } from '..';

export const commentService = {
    pickComment(campfireId: number): Promise<comment | undefined> {
        /**
         * Random pick a comment
         */
        return client.$queryRaw`SELECT * FROM comment WHERE campfire_id=${campfireId} ORDER BY rand() LIMIT 1`;
    },
    addComment(campfireId: number, content: string, userId?: number) {
        return client.comment.create({
            data: {
                campfire_id: campfireId,
                content: content,
                sender_id: userId,
            },
        });
    },
};

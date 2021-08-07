/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Campfire } from '../models/Campfire';
import type { Comment } from '../models/Comment';
import { request as __request } from '../core/request';

export class Service {

    /**
     * Get all campfires
     * @param topic
     * @param limit
     * @param random
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public static async getCampfire(
        topic?: string,
        limit?: number,
        random?: boolean,
        id?: number,
    ): Promise<{
        campfires?: Array<Campfire>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/campfire`,
            query: {
                'topic': topic,
                'limit': limit,
                'random': random,
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * Add a new campfire
     * @param requestBody
     * @returns any Response indicating whether the operation is a success
     * @throws ApiError
     */
    public static async postCampfire(
        requestBody: {
            topic: string,
        },
    ): Promise<{
        result?: 'success' | 'error',
    }> {
        const result = await __request({
            method: 'POST',
            path: `/campfire`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Participate in a campfire
     * @param id
     * @returns any Response indicating whether the operation is a success
     * @throws ApiError
     */
    public static async postCampfireParticipate(
        id?: number,
    ): Promise<{
        result?: 'success' | 'error',
    }> {
        const result = await __request({
            method: 'POST',
            path: `/campfire/${id}/participate`,
        });
        return result.body;
    }

    /**
     * Randomly get a comment from a campfire
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public static async getCampfireComment(
        id?: number,
    ): Promise<{
        comment: Comment,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/campfire/${id}/comment`,
            errors: {
                403: `The number of comments per campfire is limited to 1 each day`,
            },
        });
        return result.body;
    }

    /**
     * Leave a comment for a campfire
     * @param requestBody
     * @returns any Response indicating whether the operation is a success
     * @throws ApiError
     */
    public static async postCampfireComment(
        requestBody: {
            /**
             * The id of the campfire
             */
            id: number,
            /**
             * The content of the comment
             */
            content: string,
        },
    ): Promise<{
        result?: 'success' | 'error',
    }> {
        const result = await __request({
            method: 'POST',
            path: `/campfire/comment`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Get the top campfires
     * @param limit
     * @returns any Success
     * @throws ApiError
     */
    public static async getCampfireTrending(
        limit?: number,
    ): Promise<{
        campfires?: Array<Campfire>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/analytics/campfire/trending`,
            query: {
                'limit': limit,
            },
        });
        return result.body;
    }

}
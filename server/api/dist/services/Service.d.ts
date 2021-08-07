import type { Campfire } from '../models/Campfire';
import type { Comment } from '../models/Comment';
export declare class Service {
    static getCampfire(topic?: string, limit?: number, random?: boolean, id?: number): Promise<{
        campfires?: Array<Campfire>;
    }>;
    static postCampfire(requestBody: {
        topic: string;
    }): Promise<{
        result?: 'success' | 'error';
    }>;
    static postCampfireParticipate(id?: number): Promise<{
        result?: 'success' | 'error';
    }>;
    static getCampfireComment(id?: number): Promise<{
        comment: Comment;
    }>;
    static postCampfireComment(requestBody: {
        id: number;
        content: string;
    }): Promise<{
        result?: 'success' | 'error';
    }>;
    static getCampfireTrending(limit?: number): Promise<{
        campfires?: Array<Campfire>;
    }>;
}

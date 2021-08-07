import type { Campfire } from '../models/Campfire';
export declare class Service {
    static getCampfire(topic?: string): Promise<{
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
        comment: Campfire;
    }>;
    static postCampfireComment(requestBody: {
        content?: string;
    }, id?: number): Promise<{
        result?: 'success' | 'error';
    }>;
    static getCampfireTrending(limit?: number): Promise<{
        campfires?: Array<Campfire>;
    }>;
}

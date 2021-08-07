import { participation } from '@prisma/client';
import { client } from '..';


export const trendingService = {

    giveTrend()
    {
      // @ts-ignore
        return client.participation.groupBy({
          by: ['campfire_id'], // @ts-ignore
          _count: {
          },
          orderBy: { // @ts-ignore
            _count: {
              campfire_id: 'desc',
            },
          },
          take: 3,
        })
    },
};



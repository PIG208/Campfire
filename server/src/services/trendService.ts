import { participation } from '@prisma/client';
import { client } from '..';


export const trendService = {

    giveTrend()
    {
      // @ts-ignore
        return client.participation.groupBy({
          by: ['campfire_id'], 
          _count: { // @ts-ignore
            _all: true,
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



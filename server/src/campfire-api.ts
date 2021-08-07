const apiDoc = {
    swagger: '3.0',
    info: {
        title: 'Campfire API.',
        version: '1.0.0',
    },
    definitions: {
        Campfire: {
            type: 'object',
            properties: {
                topic: {
                    description: 'The topic of the campfire.',
                    type: 'string',
                },
            },
            required: ['topic'],
        },
    },
    paths: {},
};

export default apiDoc;

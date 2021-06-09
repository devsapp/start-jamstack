
const { dk } = require('@serverless-devs/dk');
const handler = dk((ctx) => {
    return {
        json: { data: {}, success: true }
    }
})

exports.handler = handler;

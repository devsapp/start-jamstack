
const { dk } = require('@serverless-devs/dk');

const handler = dk((ctx) => {
  return {
    json: { title: 'hello serverless devs' },
  }
})

exports.handler = handler;


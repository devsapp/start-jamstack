
const { dk } = require('@serverless-devs/dk');

const handler = dk((ctx) => {
    const { password, username, type } = ctx.req.body;
    if (password === 'ant.design' && username === 'admin') {
        access = 'admin';
        return {
            json: {
                status: 'ok',
                type,
                currentAuthority: 'admin',
            }
        };
    }
    if (password === 'ant.design' && username === 'user') {

        access = 'user';
        return {
            json: {
                status: 'ok',
                type,
                currentAuthority: 'user',
            }
        };
    }
    if (type === 'mobile') {

        return {
            json: {
                status: 'ok',
                type,
                currentAuthority: 'admin',
            }
        };
    }
    access = 'guest';
    return {
        json: {
            status: 'error',
            type,
            currentAuthority: 'guest',
        }
    };
})

exports.handler = handler


const { dk } = require('@serverless-devs/dk');
const cookie = require('cookie');
const handler = dk((ctx) => {
    const { password, username, type } = ctx.req.body;
    if (password === 'ant.design' && username === 'admin') {
        return {
            headers: {
                'Set-Cookie': cookie.serialize('antd_login', String(username), {
                    httpOnly: false,
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7 // 1 week
                })
            },
            json: {
                status: 'ok',
                type,
                currentAuthority: 'admin',
            }
        };
    }
    if (password === 'ant.design' && username === 'user') {
        return {
            headers: {
                'Set-Cookie': cookie.serialize('antd_login', String(username), {
                    httpOnly: false,
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7 // 1 week
                })
            },
            json: {
                status: 'ok',
                type,
                currentAuthority: 'user',
            }
        };
    }
    if (type === 'mobile') {
        
        return {
            headers: {
                'Set-Cookie': cookie.serialize('antd_login', String(username), {
                    httpOnly: false,
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7 // 1 week
                })
            },
            json: {
                status: 'ok',
                type,
                currentAuthority: 'admin',
            }
        };
    }
    return {
        json: {
            status: 'error',
            type,
            currentAuthority: 'guest',
        }
    };
})

exports.handler = handler

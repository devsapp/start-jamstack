
const { dk } = require('@serverless-devs/dk');
const cookie  = require('cookie');
const handler = dk((ctx) => {
    return {
        headers: {
                'Set-Cookie': cookie.serialize('antd_login', '', {
                    httpOnly: false,
                    path: '/',
                    maxAge: -1 // 1 week
                })
            },
        json: { data: {}, success: true }
    }
})

exports.handler = handler;

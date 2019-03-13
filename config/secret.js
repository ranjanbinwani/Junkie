module.exports = {

    database: 'mongodb://root:Awesome1@ds161724.mlab.com:61724/ecommerce-ranjan',
    port: 3000,
    secretKey: 'Ranjan@$!#%#@',

    facebook: {
        clientID: process.env.FACEBOOK_ID || '1083787635161155',
        clientSecret: process.env.FACEBOOK_SECRET || 'c868fcff79e838ff6eee3e6c310eee88',
        profileFields: ['emails', 'displayName'],
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    }
}
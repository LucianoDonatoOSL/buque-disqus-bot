const Bot = require('./bot')

class Gustavibot extends Bot {
    constructor() {
        super();
        this.access_token = process.env.GUSTAVIBOT_ACCESS_TOKEN
        this.api_key = process.env.GUSTAVIBOT_API_KEY
        this.api_secret = process.env.GUSTAVIBOT_API_SECRET
        this.command = '!gustavibot'
        this.messages = [
            'https://uploads.disquscdn.com/images/147c50b225951bbc4b45672a88e62af7d4c9f73624fe33cd5f1a3f342bcac063.png',
            'http://uploads.disquscdn.com/images/5e54ebff7f0302f64d52cd7256f222298204ebff6a59058d2a03f7dfd5ca0938.gif',
            'https://uploads.disquscdn.com/images/c78ac90496b9a598c5034943595737020e6e9e9d8548b056da91eb71d935e877.png',
            'https://uploads.disquscdn.com/images/cec414163b00952b9a98e0fd4da7522629f640102614fcd78b6e8376359129dd.gif',
            'https://uploads.disquscdn.com/images/b02ddfa021be9ca86156b5d18dcea4b982866e5985af852ae8bea8d32f55ce10.png',
            'https://uploads.disquscdn.com/images/f086529f6a392b837fa2fc91f95d49a7872b60ff8f794add04b5b3684609b233.jpg',
            'https://uploads.disquscdn.com/images/a7d06a44a1b526ee6bf79abca5029e9d94d76b9000ee575896c07f0c5786e140.jpg',
            'https://uploads.disquscdn.com/images/cc4224ce6df0a3fbaee0a88a28d7177e9a3c2564691f35501a796d5221c8beca.jpg',
            'http://uploads.disquscdn.com/images/eea24fa58f025806dbb64646142bae7a3c6c38cb8a3e26cce05d1386a6a818c7.jpg',
            'https://uploads.disquscdn.com/images/3d3cc14cc138d338fe0b8f1af8b3290c1749d38efa2aaf87aac65bd6bc352d03.png',
            'https://uploads.disquscdn.com/images/af243411378783cf2bd2211c1783ed804025a9a24c85b797d6fd306815536eec.jpg',
            'https://uploads.disquscdn.com/images/7d7d1a39b7a032a0d621032d5871beb76ebacbce8eb7e8dee28796017c46bb58.png',
            'https://uploads.disquscdn.com/images/8cd3ea6fd9c4e72742cb4aa3ee7218e69c40424ff7ed574a24f79a6c4a050358.jpg',
            'https://uploads.disquscdn.com/images/7e14cfc5e449d9e7e0620f11219dd72a8f0482e7a05972c8c4e6edeec8b6893e.gif',
            'https://i.imgur.com/yn2mMAE.jpg'
          ]
    }
    
}
module.exports = Gustavibot
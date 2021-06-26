const Bot = require('./bot')

class Pescadito extends Bot {

    constructor() {
        super();
        this.access_token = process.env.PESCADITO_ACCESS_TOKEN
        this.api_key = process.env.PESCADITO_API_KEY
        this.api_secret = process.env.PESCADITO_API_SECRET
        this.command = '!pescadito'
        this.messages = [
            'asdasd',
            'asdasdds',
            'asdasddsasdas',
            'asdasddsasdasdds',
            'asdasddsasdasddsasdasdds',
            'asdasddsasdasddsasdasddsasdasdds',
            'asdasddsasdasddsasdasddsasdasddsasdasddsasdasddsasdasdds',
            'asdasddsasdasddsasdasddsasdasddsasdasddsasdasddsasdasddsasdasddsasdasddsasdasdds'
        ]
    }

}
module.exports = Pescadito
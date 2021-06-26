const Bot = require('./bot')

class March extends Bot {
    constructor() {
        super();
        this.access_token = process.env.MARCH_ACCESS_TOKEN
        this.api_key = process.env.MARCH_API_KEY
        this.api_secret = process.env.MARCH_API_SECRET
        this.command = '!march'
        this.messages = [
            'Hmmmmmmm',
            'Hhhmmmmmmmmmmmmmmmmmmmmmmmmm',
            'homie?',
            'HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMERRRRRRRROOOOOOOOOOOOOOOO',
            'HHHHHMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM',
            'HMMMMMMEEEEROOOOOO',
            'HMMMMMMMMMMMMMMMMMMMMMMM',
            'Hmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
            'Hmmmmm',
            'HHHHOMIEE?',
            'MMMMMMMMMMMEROOOOOOOOO'
          ]
    }
    
}
module.exports = March
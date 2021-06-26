const Bot = require('./bot')

class Disqusita extends Bot {
    constructor() {
        super();
        this.access_token = process.env.DISQUSITA_ACCESS_TOKEN
        this.api_key = process.env.DISQUSITA_API_KEY
        this.api_secret = process.env.DISQUSITA_API_SECRET
        this.command = '!disqusita'
        this.messages = [
            'Callao furro',
            'Todos furros',
            'Ridículo',
            'tetqetqetqe',
            'tetqetqetqetetqetqetqe',
            'tetqetqetqetetqetqetqetetqetqetqe',
            'tetqetqetqetetqetqetqetetqetqetqetetqete',
            'tetqetqetqetetqetqetqetetqetqetqetetqetqettqetqetqe',
            'tetqetqetqetetqetqetqetetqetqetqetetqetqetqetetqetqeetqetetqetqetqe',
            'tetqetqetqetetqetqetqetetqetqetqetetqetqetqetetqetqetqetetqetqetqetetqetqetqetetqetqetqe',
            'tetqetqetqetetqetqetqetetqetqetqetetqetqetqetetqetqetqetetqetqetqeetetqetqetqe',
          ]
    }
    
}
module.exports = Disqusita
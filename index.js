require('dotenv').config()

const { Pescadito, Gustavibot, Disqusita, March } = require('./bots');

const bots = [
    gustavibot = new Gustavibot, 
    pescadito = new Pescadito, 
    disqusita = new Disqusita,
    march = new March
]

bots.forEach(bot => {
    bot.subscribe()
});

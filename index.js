require('dotenv').config()

const { Pescadito, Gustavibot, Disqusita, March, Muchachita } = require('./bots');

const bots = [
    gustavibot = new Gustavibot, 
    pescadito = new Pescadito, 
    disqusita = new Disqusita,
    march = new March,
    muchachita = new Muchachita
]

bots.forEach(bot => {
    bot.subscribe()
});

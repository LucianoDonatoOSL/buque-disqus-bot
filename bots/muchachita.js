const Bot = require('./bot')

class Muchachita extends Bot {
    constructor() {
        super();
        this.access_token = process.env.MUCHACHITA_ACCESS_TOKEN
        this.api_key = process.env.MUCHACHITA_API_KEY
        this.api_secret = process.env.MUCHACHITA_API_SECRET
        this.command = '!muchachita'
        this.messages = [
        ]
    }

    reply(threadId, parentPost) {
        const parentPostContent = parentPost.post.message.replace(/(<([^>]+)>)/gi, "")
        const parentPostId = parentPost.id
        const author = parentPost.author.username
        
        if (parentPostContent.includes(this.command) && author != 'disqus_rjWkYUyg5u' && !parentPostContent.includes('http')) {
            let messageContent = parentPostContent.replace(this.command, '').replace(/[aeiouáéíóú]/ig,'i')
            const params = { 'message': messageContent, thread: threadId, parent: parentPostId }
            this.client.post('posts/create', params, (e, response) => {
                if (e && e.statusCode == 400) {
                    const params = { 'message': messageContent + " <b>", thread: threadId, parent: parentPostId }
                    this.client.post('posts/create', params, (e, response) => {
                    });
                }
            });
        }
    }
    
}
module.exports = Muchachita
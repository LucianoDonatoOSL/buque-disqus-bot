const Disqus = require('../libs/neo-disqus')

class Bot {
    constructor() {
        this.forums = JSON.parse(process.env.FORUMS)
    }
    subscribe() {
        this.client = new Disqus({
            access_token: this.access_token,
            api_key: this.api_key,
            api_secret: this.api_secret
        })

        this.forums.forEach(forum => {
            let params = { forum: forum, limit: 1, include: 'open' }

            this.client.get('forums/listThreads', params, (e, lastThreads) => {
                if (e) return console.error(e)

                const threadId = lastThreads.response[0].id
                const stream = this.client.stream(`thread/${threadId}`)

                stream.on('open', () => { console.log('connected') })

                stream.on('message', (message) => {
                    try {
                        message = JSON.parse(message)
                        if (message.message_type == 'Post') {
                            const postId = message.message_body.id
                            const postContent = message.message_body.post.message.replace(/(<([^>]+)>)/gi, "")
                            this.reply(threadId, postId, postContent);
                            // this.upVote(postId);
                        }

                    } catch (error) {
                        console.log("error: " + error);
                    }
                })
            })
        });
    }

    upVote(postId) {
        const params = { vote: 1, post: postId }
        this.client.post('posts/vote', params, (e, response) => {
        });
    }

    reply(threadId, parentMessageId, parentMessageContent) {
        if (parentMessageContent.includes(this.command)) {
            let messageContent = this.messages[Math.floor(Math.random() * this.messages.length)];
            const params = { 'message': messageContent, thread: threadId, parent: parentMessageId }
            this.client.post('posts/create', params, (e, response) => {
                if (e && e.statusCode == 400) {
                    const params = { 'message': messageContent + " <b>", thread: threadId, parent: parentMessageId }
                    this.client.post('posts/create', params, (e, response) => {
                    });
                }
            });
        }
    }
}
module.exports = Bot;
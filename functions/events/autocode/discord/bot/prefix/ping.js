const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let latency = new Date() - new Date(context.params.event.timestamp);

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": ``,
  "tts": false,
  "allowed_mentions": {
     "replied_user": false
   },
   "message_reference": {
     "message_id": context.params.event.id
   },
  "embeds": [
    {
      "type": "rich",
      "title": ``,
      "description": `Current health is ${latency}ms.`,
      "color": 0xEA9A59,
      "footer": {
        "text": `Made with 🧡 by Buuya`,
        "icon_url": `https://cdn.discordapp.com/avatars/700173927871152131/a_9ebf8f2b2a2db0fb9f3a50b9e53b89e0.webp?size=128`
      },
    }
  ]
});

//BuuyaXDev

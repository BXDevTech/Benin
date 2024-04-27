const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": ``,
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
            {
              "style": 5,
              "label": `Invite Me To Your Server`,
              "url": `https://discord.com/api/oauth2/authorize?client_id=906849287164559361&permissions=2147535936&scope=bot%20applications.commands`,
              "disabled": false,
              "type": 2,
            },
          ],
        },
      ],
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
      "description": `If you would like to invite **Benin** to other servers, then just do it!`,
      "color": 0xEA9A59,
      "fields": [
        {
          "name": `Click the buttons below to get started`,
          "value": "\u200B"
        }
      ],
      "footer": {
        "text": `Made with 🧡 by Buuya`,
        "icon_url": `https://cdn.discordapp.com/avatars/700173927871152131/a_9ebf8f2b2a2db0fb9f3a50b9e53b89e0.webp?size=128`
      },
    }
  ]
});
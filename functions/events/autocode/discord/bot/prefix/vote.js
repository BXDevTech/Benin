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
          "label": `Top.gg`,
          "url": `https://top.gg/bot/906849287164559361/vote/`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 5,
          "label": `VoidBots`,
          "url": `https://voidbots.net/bot/906849287164559361/vote/`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 5,
          "label": `Bot.gg`,
          "url": `https://bot.gg/ben2/`,
          "disabled": false,
          "type": 2
        }
      ]
    }
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
      "description": `If you would like to vote for **Benin** then just do it!`,
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
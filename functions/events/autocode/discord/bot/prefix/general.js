const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});


await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
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
      "description": `You have arrived at **general** Command station`,
      "color": 0xEA9A59,
      "fields": [
        {
          "name": `About`,
          "value": `>about`,
          "inline": true
        },
        {
          "name": `Update Log`,
          "value": `>log`,
          "inline": true
        },
        {
          "name": `Ping`,
          "value": `>ping`,
          "inline": true
        },
        {
          "name": `Vote`,
          "value": `>vote`,
          "inline": true
        },
        {
          "name": `Invite`,
          "value": `>Invite`,
          "inline": true
        },
        {
          "name": `Settings`,
          "value": `*coming soon*`,
          "inline": true
        },
      ],
      "footer": {
        "text": `Made with 🧡 by Buuya`,
        "icon_url": `https://cdn.discordapp.com/avatars/700173927871152131/a_9ebf8f2b2a2db0fb9f3a50b9e53b89e0.webp?size=128`
      },
    }
  ]
});

//BuuyaXDev
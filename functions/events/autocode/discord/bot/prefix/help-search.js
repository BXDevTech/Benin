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
      "description": `You have arrived at **help-search** Command station`,
      "color": 0xEA9A59,
      "fields": [
        {
          "name": `Google`,
          "value": `>google`,
          "inline": true
        },
        {
          "name": `Bing`,
          "value": `>bing`,
          "inline": true
        },
        {
          "name": `Reddit`,
          "value": `>reddit`,
          "inline": true
        },
        {
          "name": `Youtube`,
          "value": `>youtube`,
          "inline": true
        },
        {
          "name": `Twitch`,
          "value": `>twitch`,
          "inline": true
        },
        {
          "name": `Github`,
          "value": `>github`,
          "inline": true
        }
      ],
    }
  ]
});

//BuuyaXDev
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
      "description": `You have arrived at **help-fun** Command station`,
      "color": 0xEA9A59,
      "fields": [
        {
          "name": `Topic`,
          "value": `>topic`,
          "inline": true
        },
        {
          "name": `Roast`,
          "value": `>roast`,
          "inline": true
        },
        {
          "name": `Jokes`,
          "value": `>joke`,
          "inline": true
        },
        {
          "name": `Pickup Line`,
          "value": `>pickup`,
          "inline": true
        },
        {
          "name": `Toast`,
          "value": `>toast`,
          "inline": true
        },
        {
          "name": `Quote`,
          "value": `>quote`,
          "inline": true
        }
      ],
    }
  ]
});

//BuuyaXDev
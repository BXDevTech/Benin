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
      "title": `Ben2 Plugin Commands`,
      "description": `These are all the things you can do with **Benin**`,
      "color": 0xEA9A59,
      "fields": [
        {
          "name": `Meme`,
          "value": `>meme`,
          "inline": true
        },
        {
          "name": `Funny Pets`,
          "value": `>pet`,
          "inline": true
        },
         {
          "name": `Mini Games`,
          "value": `*coming soon*`,
          "inline": true
        },
        {
          "name": `Search`,
          "value": `>search`,
          "inline": true
        },
        {
          "name": `Fun`,
          "value": `>fun`,
          "inline": true
        },
        {
          "name": `General`,
          "value": `>general`,
          "inline": true
        }
      ],
      "thumbnail": {
        "url": `https://cdn.discordapp.com/avatars/906849287164559361/e4e2ab5053444b4a28dfaf4129eea43f.webp?size=128`,
        "height": 0,
        "width": 0
      },
    }
  ]
});

//BuuyaXDev
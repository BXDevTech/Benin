const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});


await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `986640659324747816`,
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
      "description": `**Ben2 - Update Log**`,
      "color": 0xEA9A59,
      "fields": [
        {
          "name": `Version 2.5.7:`,
          "value": `
          - Added *>general*.
          - Updated all commands.
          - Minor embed changes.
          - Major bug fixe`,
          "inline": true
        }
      ],
      "footer": {
        "text": `Made with 🧡 by Buuya`,
        "icon_url": `https://cdn.discordapp.com/avatars/700173927871152131/a_9ebf8f2b2a2db0fb9f3a50b9e53b89e0.webp?size=128`
      },
    }
  ]
});

//BuuyaXDev
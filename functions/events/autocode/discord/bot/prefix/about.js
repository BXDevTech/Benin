const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

  await lib.discord.channels['@0.0.6'].messages.create({
    "channel_id": `${context.params.event.channel_id}`,
    "content": ``,
    "allowed_mentions": {
       "replied_user": false
     },
     "message_reference": {
       "message_id": context.params.event.id
     },
    "embed": {
      "title": `**Hi 👋, I'm Ben2 | Benin**`,
      "description": `(▀̿Ĺ̯▀̿ ̿) - Looking for a quality Meme bot?
            
      **Prefix**
      '>'
      
      **Commands**
      **help :** This commands shows you what commands i come with
      **meme:** This one will show you random memes to make your day
      **pets:** This is will show you funny animals
      **games:** I just love delaying this one, i promise it will be a thing soon
      **search:** This one will search anything you want from the comfort of discord
      **fun:** Just have fun with this one
      **general:** Just have fun with this one
      
      ** Links**
      Github Page: https://github.com.com/buuyaxd
      Support Server: https://discord.gg/nmQqyaDrrU
        
      **Thank You!**
      If you have any questions or feedback, please join my Discord Community from the Links section above. You can also follow me on Twitter, @BuuyaXD`,
      "color": 0xEA9A59,
      "footer": {
        "text": `Made with 🧡 by Buuya`,
        "icon_url": `https://cdn.discordapp.com/avatars/700173927871152131/a_9ebf8f2b2a2db0fb9f3a50b9e53b89e0.webp?size=128`
      },      
    },
  });

//BuuyaXDev

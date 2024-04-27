const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let deathmsg = [
  `let star platinum revive you`,
  `it’s just a scratch`,
  `lol`,
  `Discord, i'm i right`,
  `Some people just need a High-Five on the face`,
  `The god of death has decided`,
  `Bigfoot saw me yesterday, but no one believes him`,
  `Bigfoot doesn't belive in you either`,
  `I’m having a quarantine party this weekend. None of you are invited!`,
  `You need some milk, cause your dad said hi`,
  `Your death go BRRRRRR`,
  `Went out with a bang`,
];
let deathgif = [
  `https://media1.tenor.com/images/903cf079f0e1fb24a9b11a687d02b242/tenor.gif?itemid=13970904`,
  `https://media.tenor.com/FFYqOVVbrJAAAAAC/markiplier-punch.gif?itemid=23206537`,
  `https://media.tenor.com/f3J-yZcZfU0AAAAC/cat-punch.gif?itemid=21749518`,
]
let gif= Math.floor(Math.random() * deathgif.length);
let dg= deathgif[gif];

let death= Math.floor(Math.random() * deathmsg.length);
let dm= deathmsg[death];

let message = context.params.event.content;

if (message.startsWith(`>fun`)) {
await lib.discord.channels['@0.0.6'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": `Need help with this commands? Try **>help-fun**`,
   "allowed_mentions": {
    "replied_user": false
  },
  "message_reference": {
    "message_id": context.params.event.id
  },
});
} if(context.params.event.content.startsWith(">punch")) {
  if (context.params.event.mentions.length !== 1) {
  await lib.discord.channels['@0.1.2'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: `You probably smoke if you want to punch air`,
      "allowed_mentions": {
        "replied_user": true,
      },
      "message_reference": {
        "message_id": context.params.event.id
      },
    });
  } else {
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    "content": ``,
    "allowed_mentions": {
      "replied_user": true,
    },
    "message_reference": {
      "message_id": context.params.event.id
    },
    "tts": false,
    "embed": {
      "type": "rich",
      "title": `${context.params.event.mentions[0].username}, ${dm}`,
      "description": "",
      "color": 0xEA9A59,
      "image": {
        "url": `${dg}`,
        "height": 0,
        "width": 0
      }
    }
  });
  }
}
// BuuyaXDev
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let search = context.params.event.content.split(' ').splice(1).join('%20');
let google = `https://www.google.com/search?q=${search}`;
let bing = `https://www.bing.com/search?q=${search}`;
let reddit = `https://www.reddit.com/r/${search}`;
let youtube = `https://www.youtube.com/results?search_query=${search}`;
let twitch = `https://www.twitch.tv/${search}`;
let github  = `https://www.github.com/${search}`;
let message = context.params.event.content;

 if (message.startsWith(`>search`)) {
 await lib.discord.channels['@0.0.6'].messages.create({
   "channel_id": `${context.params.event.channel_id}`,
   "content": `Need help with this commands? Try **>help-search**`,
    "allowed_mentions": {
     "replied_user": false
   },
   "message_reference": {
     "message_id": context.params.event.id
   },
 });
 } if (message.startsWith(`>google`)) {
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
      "title": `Here is your Search :mag:`,
      "description": `${google}`,
      "color": 0xEA9A59,
    },
  });
  } if (message.startsWith(`>bing`)) {
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
      "title": `Here is your Search :mag:`,
      "description": `${bing}`,
      "color": 0xEA9A59,
    },
  });
  } if (message.startsWith(`>reddit`)) {
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
      "title": `Here is your Search :mag:`,
      "description": `${reddit}`,
      "color": 0xEA9A59,
    },
  });
  } if (message.startsWith(`>youtube`)) {
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
      "title": `Here is your Search :mag:`,
      "description": `${youtube}`,
      "color": 0xEA9A59,
    },
  });
  } if (message.startsWith(`>twitch`)) {
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
      "title": `Here is your Search :mag:`,
      "description": `${twitch}`,
      "color": 0xEA9A59,
    },
  });
  } if (message.startsWith(`>github`)) {
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
      "title": `Here is your Search :mag:`,
      "description": `${github}`,
      "color": 0xEA9A59,
    },
  });
  }
//BuuyaXDev
